import axios from "axios";

const searchModule = {
  state: () => ({
    searchResultListTv: [],
    searchResultListMovie: []
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
      if (state.searchResult.subtype === "movie") {
        state.searchResultListMovie.push(searchResult);
      } else {
        state.searchResultListTv.push(searchResult);
      }
    }
  },
  actions: {
    fetchSearchResult: function (context, payload) {
      //context.searchResultListTv.splice(0,context.searchResultListTv.length);
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
    }
  }
};

export default searchModule;
