import axios from "axios";

const searchModule = {
  state: () => ({
    searchResultListTv: [],
    searchResultListMovie: [],
    offset: 0,
    submited: false
  }),
  //saving search results
  mutations: {
    saveSearchResult: function (state, { attributes, id }) {
      const searchResult = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.posterImage.original,
        id: id,
        rating: "?",
        subtype: attributes.subtype
      };
      if (attributes.averageRating != null) {
        searchResult.rating = attributes.averageRating;
      }
      //save to movie and tv list separately
      if (searchResult.subtype === "movie") {
        state.searchResultListMovie.push(searchResult);
      } else {
        state.searchResultListTv.push(searchResult);
      }
    },
    //cleaning data to avoid dublication
    eraseOffset(state) {
      state.searchResultListTv = [];
      state.searchResultListMovie = [];
      state.offset = 0;
      state.submited = false;
    },
    //if the submision was made,search results and the subtype headers appear
    stateSubmited(state) {
      state.submited = true;
    },
    getSearchText(state, payload) {
      state.searchText = payload;
    },
    noResults(state) {
      state.submited = false;
    }
  },
  //getting data
  actions: {
    fetchSearchResult: function (context) {
      context.commit("stateSubmited");
      this.offset = context.state.offset;
      const searchText = context.state.searchText;
      context.state.searchResultListTv = [];
      context.state.searchResultListMovie = [];
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${this.offset}&filter%5Btext%5D=${searchText}`
        )
        .then(function ({ data }) {
          if (data.data < 20) {
            context.commit("noResults");
          }
          data.data.forEach((element) => {
            context.commit("saveSearchResult", element);
          });
        });
      context.state.offset += 20;
    }
  }
};

export default searchModule;
