import axios from "axios";

const homeModule = {
  state: () => ({
    hero: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    }
  }),
  mutations: {
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.titles.en,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    saveMostPopular(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      console.log(state);
    },
    saveNewest(state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      console.log(state);
    },
    saveRecentlyUpdated(state, { attributes, id }) {
      state.recentlyUpdated = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      console.log(state);
    }
  },
  actions: {
    fetchHero: function (context) {
      axios
        .get("https://kitsu.io/api/edge/trending/anime")
        .then(function ({ data }) {
          context.commit("saveHero", data.data[0]);
        });
    },
    fetchMostPopular(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          context.commit("saveMostPopular", data.data[0]);
        });
    },
    fetchNewest(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-startDate"
        )
        .then(function ({ data }) {
          context.commit("saveNewest", data.data[0]);
        });
    },
    fetchRecentlyUpdated(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          context.commit("saveRecentlyUpdated", data.data[0]);
        });
    }
  }
};

export default homeModule;
