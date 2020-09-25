import axios from "axios";

const categoryModule = {
  state: () => ({
    mostPopular: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    newest: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    recentlyUpdated: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    }
  }),
  mutations: {
    saveMostPopular1(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      }   
    },
    saveNewest1(state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
    },
    saveRecentlyUpdated1(state, { attributes, id }) {
      state.recentlyUpdated = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
    }
  },
  actions: {
   
    fetchMostPopular1(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          context.commit("saveMostPopular1", data.data[0]);
        });
    },
    fetchNewest1(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-startDate"
        )
        .then(function ({ data }) {
          context.commit("saveNewest1", data.data[0]);
        });
    },
    fetchRecentlyUpdated1(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          context.commit("saveRecentlyUpdated1", data.data[0]);
        });
    }
  }
};

export default categoryModule;
