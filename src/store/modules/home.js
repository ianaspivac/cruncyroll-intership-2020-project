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
    card: {
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
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.titles.en,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    saveMiniCategory(state, { attributes, id }) {
      state.card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      if (state.categoryName === "Most Popular") {
        state.mostPopularList.push(state.card);
      } else if (state.categoryName === "Newest") {
        state.newestList.push(state.card);
      } else if (state.categoryName === "Recently Updated") {
        state.recentlyUpdatedList.push(state.card);
      }
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
          context.state.categoryName = "Most Popular";
          data.data.forEach((element) => {
            context.commit("saveMiniCategory", element);
          });
        });
    },
    fetchNewest(context) {
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
    fetchRecentlyUpdated(context) {
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
/* */
