import axios from "axios";

const categoryModule = {
  state: () => ({
    mostPopularList: [],
    newestList: [],
    recentlyUpdatedList: [],
    allList: [],
    categoryUrl: "",
    categoryName: "",
    offset: 0 //using offset for pagination while loading more animes
  }),
  //saving data about animes
  mutations: {
    saveCategory(state, { attributes, id }) {
      const card = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      //adding animes to list in dependence of their category
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
    },
    //erasing all the data in order to avoid dublication
    eraseOffset(state) {
      state.mostPopularList = [];
      state.newestList = [];
      state.recentlyUpdatedList = [];
      state.allList = [];
      state.offset = 0;
    },
    //getting url which depends of category type
    whichCategory(state, payload) {
      const collectionName = payload.collectionName;
      if (collectionName === "Most Popular") {
        state.categoryUrl = "&sort=popularityRank";
        state.categoryName = collectionName;
      } else if (collectionName === "Newest") {
        state.categoryUrl = "&sort=-startDate";
        state.categoryName = collectionName;
      } else if (collectionName === "Recently Updated") {
        state.categoryUrl = "&sort=-updatedAt";
        state.categoryName = collectionName;
      } else {
        state.categoryUrl = ``;
        state.categoryName = collectionName;
      }
    }
  },
  actions: {
    //getting anime's data
    fetchCategory(context) {
      const categoryUrl = context.state.categoryUrl;
      this.offset = context.state.offset;
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=${this.offset}${categoryUrl}`
        )
        .then(function ({ data }) {
          console.log(data.data);
          data.data.forEach((element) => {
            context.commit("saveCategory", element);
          });
        });
      context.state.offset += 12;
    }
  }
};

export default categoryModule;
