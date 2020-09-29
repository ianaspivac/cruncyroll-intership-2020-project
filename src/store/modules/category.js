import axios from "axios";

const categoryModule = {
  state: () => ({
    mostPopularList: [],
    newestList: [],
    recentlyUpdatedList: [],
    allList: [],
    categoryName: "",
    offset: 0
  }),
  mutations: {
    saveCategory(state, { attributes, id }) {
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
        case "Recently Updated":
          state.recentlyUpdatedList.push(card);
          break;
        default:
          state.allList.push(card);
      }
    }
  },
  actions: {
    fetchCategory(context, payload) {
      //to add as mutation
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

      this.offset = context.state.offset;
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${this.offset}${this.category}`
        )
        .then(function ({ data }) {
          console.log(data.data);
          data.data.forEach((element) => {
            context.commit("saveCategory", element);
          });
        });
      context.state.offset += 12;
    },
    fetchEraseOffset(context) {
      context.state.mostPopularList = [];
      context.state.newestList = [];
      context.state.recentlyUpdatedList = [];
      context.state.allList = [];
      context.state.offset = 0;
    }
  }
};

export default categoryModule;
