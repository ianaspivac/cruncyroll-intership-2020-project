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
      subtype: ""
    },
    idAnime: 0,
    episodeList: [],
    offset: 0,
    offsetCharacter: 0,
    showButton: true, //control more button for episodes
    characters: [],
    characterButton: true //control more button for characters
  }),
  mutations: {
    //saving info about anime
    saveShowDescription: function (state, { attributes, id }) {
      state.showDescription = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.posterImage.original,
        id: id,
        rating: attributes.averageRating,
        trailer: attributes.youtubeVideoId,
        subtype: attributes.subtype
      };
    },
    //saving info about episodes
    saveEpisodes: function (state, { attributes }) {
      const episode = {
        title: attributes.canonicalTitle,
        number: attributes.number,
        thumbnail: attributes.thumbnail.original
      };
      state.episodeList.push(episode);
      state.idAnime = state.showDescription.id;
    },
    //saving info about characters
    saveCharacter: function (state, { general, castName }) {
      const character = {
        name: general.canonicalName,
        image: "https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg",
        cast: castName
      };
      if(general.image !== null){
      character.image = general.image.original     
      ;}
      state.characters.push(character);
    },
    //clearing lists to avoid dublication
    clearOffset(state) {
      state.episodeList = [];
      state.offset = 0;
      state.offsetCharacter = 0;
      state.characters = [];
    },
    //control of "more" button
    hideMoreButton(state) {
      state.showButton = false;
    },
    hideCharacterMoreButton(state) {
      state.characterButton = false;
    }
  },

  actions: {
    //getting description about anime
    fetchShowDescription: function (context, payload) {
      const id = payload.id;

      axios
        .get(`https://kitsu.io/api/edge/anime?filter[id]=${id}`)
        .then(function ({ data }) {
          context.commit("saveShowDescription", data.data[0]);
        });
    },
    //getting anime's episode's title and thumbnail
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
    //getting data about character and voice actors
    fetchCharacter: function (context, payload) {
      this.offset = context.state.offsetCharacter;
      //getting all anime's characters
      const charactersUrl = `https://kitsu.io/api/edge/anime/${payload.id}/characters?page[limit]=12&page[offset]=${this.offset}`;

      axios.get(charactersUrl).then((response) => {
        if (response.data.data.length < 12) {
          context.commit("hideCharacterMoreButton");
        }
        //getting info about each character
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
              //getting info only about japanese voice actors
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

      context.state.offsetCharacter += 12;
    }
  }
};

export default showModule;
