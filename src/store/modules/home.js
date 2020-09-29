import axios from "axios";

const homeModule = {
  state: () => ({
    hero: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    categoryName: "",
    mostPopularList: [],
    newestList: [],
    recentlyUpdatedList: []
  }),
  mutations: {
    /*saving trending anime into state.hero */
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.titles.en,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    /*data recived from api is saved,separated into lists by topic names */
    saveMiniCategory(state, { attributes, id }) {
      const card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      switch (state.categoryName) {
        case "Most Popular":
          state.mostPopularList.push(card);
          break;
        case "Newest":
          state.newestList.push(card);
          break;
        default:
          state.recentlyUpdatedList.push(card);
      }
    }
  },
  actions: {
    /*getting info about trending anime */
    fetchHero: function (context) {
      axios
        .get("https://kitsu.io/api/edge/trending/anime")
        .then(function ({ data }) {
          context.commit("saveHero", data.data[0]);
        });
    },
    /* action gets first 6 popular animes */
    fetchMostPopular(context) {
      context.state.mostPopularList = [];
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          context.state.categoryName = "Most Popular";
          data.data.forEach((element) => {
            context.commit("saveMiniCategory", element);
          });
        });
    },
    /* action gets first 6 newesr animes */
    fetchNewest(context) {
      context.state.newest = [];
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-startDate"
        )
        .then(function ({ data }) {
          context.state.categoryName = "Newest";
          data.data.forEach((element) => {
            context.commit("saveMiniCategory", element);
          });
        });
    },
    /* action gets first 6 recently updated animes */
    fetchRecentlyUpdated(context) {
      context.state.recentlyUpdated = [];
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          context.state.categoryName = "Recently Updated";
          data.data.forEach((element) => {
            context.commit("saveMiniCategory", element);
          });
        });
    }
  }
};

export default homeModule;
