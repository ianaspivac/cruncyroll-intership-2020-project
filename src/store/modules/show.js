import axios from "axios";

const showModule = {
  state: () => ({
    showDescription: {
      title: "",
      description: "",
      image: "",
      id: 1,
      slug: "",
      rating: 0,
      trailer: "",
      nrEpisodes: 0
    },
    idAnime: 0,
    episodeList: [],
    offset: 0,
    showButton: true,
    characters: [],
    casts: []
  }),
  mutations: {
    saveShowDescription: function (state, { attributes, id }) {
      state.showDescription = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.posterImage.original,
        id: id,
        rating: attributes.averageRating,
        slug: attributes.slug,
        trailer: attributes.youtubeVideoId
      };
    },
    saveEpisodes: function (state, { attributes }) {
      const episode = {
        title: attributes.canonicalTitle,
        number: attributes.number,
        thumbnail: attributes.thumbnail.original
      };
      state.episodeList.push(episode);
      state.idAnime = state.showDescription.id;
    },
    saveCharacter: function (state, { general, castName }) {
      const character = {
        name: general.canonicalName,
        image: general.image.original,
        cast: castName
      };
      state.characters.push(character);
    },
    saveCasts(state, { name }) {
      const nameCast = name;
      state.casts.push(nameCast);
      console.log(state.casts);
    },
    clearOffset(state) {
      state.episodeList = [];
      state.offset = 0;
    },
    saveCastings: function (state) {
      state.cast = {};
    },
    hideMoreButton(state) {
      state.showButton = false;
    }
  },

  actions: {
    fetchShowDescription: function (context, payload) {
      const id = payload.id;

      axios
        .get(`https://kitsu.io/api/edge/anime?filter[id]=${id}`)
        .then(function ({ data }) {
          context.commit("saveShowDescription", data.data[0]);
        });
    },
    fetchEpisodes: function (context, payload) {
      const id = payload.id;
      this.offset = context.state.offset;
      axios
        .get(
          `https://kitsu.io/api/edge/anime/${id}/episodes?page[limit]=12&page[offset]=${this.offset}`
        )
        .then(function ({ data }) {
          data.data.forEach((episode) => {
            context.commit("saveEpisodes", episode);
          });
          if (data.data.length < 12) {
            context.commit("hideMoreButton");
          }
        });
      context.state.offset += 12;
    },
    fetchCharacter: function (context, payload) {
      const charactersUrl = `https://kitsu.io/api/edge/anime/${payload.id}/characters`;

      axios.get(charactersUrl).then((response) => {
        response.data.data.forEach((character) => {
          axios
            .get(
              `https://kitsu.io/api/edge/media-characters/${character.id}/character`
            )
            .then(({ data }) => {
              const dataCharacter = {
                general: data.data.attributes,
                castName: ""
              };
              const castsUrl = data.data.relationships.castings.links.related;
              axios
                .get(`${castsUrl}?filter[language]=Japanese`)
                .then(({ data }) => {
                  if (data.data.length !== 0) {
                    const castUrl =
                      data.data[0].relationships.person.links.related;
                    axios.get(`${castUrl}`).then(({ data }) => {
                      dataCharacter.castName = data.data.attributes.name;
                      context.commit("saveCharacter", dataCharacter);
                    });
                  } else {
                    context.commit("saveCharacter", dataCharacter);
                  }
                });
            });
        });
      });
    }
  }
};

export default showModule;
