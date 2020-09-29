import axios from "axios";

const searchModule = {
  state: () => ({
    searchResultListTv: [],
    searchResultListMovie: [],
    offset: 0,
    submited: false
  }),
  mutations: {
    saveSearchResult: function (state, { attributes, id }) {
      const searchResult = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.posterImage.original,
        id: id,
        rating: attributes.averageRating,
        subtype: attributes.subtype
      };
      if (searchResult.subtype === "movie") {
        state.searchResultListMovie.push(searchResult);
      } else {
        state.searchResultListTv.push(searchResult);
      }
    },
    eraseOffset(state) {
      state.searchResultListTv = [];
      state.searchResultListMovie = [];
      state.offset = 0;
      state.submited=false;
    },
    stateSubmited(state) {
      state.submited = true;
    }
  },
  actions: {
    fetchSearchResult: function (context, payload) {
      context.commit("stateSubmited");
      this.offset = context.state.offset;
      const searchText = payload.search;
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter%5Btext%5D=" +
            searchText
        )
        .then(function ({ data }) {
          data.data.forEach((element) => {
            context.commit("saveSearchResult", element);
          });
        });
      context.state.offset += 20;
    }
  }
};

export default searchModule;
