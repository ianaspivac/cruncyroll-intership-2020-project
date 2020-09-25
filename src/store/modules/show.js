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
    episode: {
      title: "",
      number: 0,
      thumbnail: ""
    }
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
        trailer: attributes.youtubeVideoId,
        nrEpisodes: attributes.episodeCount
      };
      console.log(state.showDescription);
      if (attributes.rating === null) {
        state.showDescription = {
          rating: 0
        };
      }
    },
    saveEpisodes: function (state, { attributes }) {
      
        state.episode = {
          title: attributes.canonicalTitle,
          number: attributes.number,
          thumbnail: attributes.thumbnail.original
        };
    
      
    },
    saveNullEpisodes:function(state){   
      state.episode = {
        title: "",
        number: 0,
        thumbnail: ""
      };
    }
  },
  actions: {
    fetchShowDescription: function (context, payload) {
      const id = payload.id;
      axios
        .get("https://kitsu.io/api/edge/anime?filter[id]=" + id)
        .then(function ({ data }) {
          context.commit("saveShowDescription", data.data[0]);
        });
    },
    fetchEpisodes: function (context, payload) {
      axios
        .get("https://kitsu.io/api/edge/anime/" + payload.id + "/episodes")
        .then(function ({ data }) {
          
          context.commit("saveEpisodes", data.data[0]);
          
        });
    }
  }
};

export default showModule;
