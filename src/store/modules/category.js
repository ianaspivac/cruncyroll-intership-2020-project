import axios from "axios";

const categoryModule = {
  state: () => ({
    card: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    mostPopularList: [],
    newestList: [],
    recentlyUpdatedList: [],
    allList: [],
    categoryName: ""
  }),
  mutations: {
    saveCategory(state, { attributes, id }) {
      state.card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      switch (state.categoryName) {
        case "Most Popular":
          state.mostPopularList.push(state.card);
          break;
        case "Newest":
          state.newestList.push(state.card);
          break;
        case "Recently Updated":
          state.recentlyUpdatedList.push(state.card);
          break;
        default:
          state.allList.push(state.card);
      }
    }
  },
  actions: {
    fetchCategory(context, payload) {
      const collectionName = payload.collectionName;
      if (collectionName === "Most Popular") {
        this.category = "&sort=popularityRank";
        context.state.categoryName = collectionName;
      } else if (collectionName === "Newest") {
        this.category = "&sort=-startDate";
        context.state.categoryName = collectionName;
      } else if (collectionName === "Recently Updated") {
        this.category = "&sort=-updatedAt";
        context.state.categoryName = collectionName;
      } else {
        this.category = "";
      }

      let offset = 0;
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offset}${this.category}`
        )
        .then(function ({ data }) {
          for (let i = 0; i < 20; i++) {
            context.commit("saveCategory", data.data[i]);
          }
        });
    }
  }
};

export default categoryModule;
