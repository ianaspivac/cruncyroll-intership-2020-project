import axios from "axios";

const searchModule = {
  state: () => ({
    searchResult: {
      title: "",
      description: "",
      image: "",
      id: "",
      slug: "",
      rating: "",
      subtype:""
    },
    searchResultListTv:[],
    searchResultListMovie:[]
  }),
  mutations: {
    saveSearchResult: function (state, { attributes, id }) {
      state.searchResult = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.posterImage.original,
        id: id,
        rating: attributes.averageRating,
        slug: attributes.slug,
        subtype:attributes.subtype
      };
      if(state.searchResult.subtype === "movie"){
        state.searchResultListMovie.push(state.searchResult);
}
else {state.searchResultListTv.push(state.searchResult);}
console.log(state);
    }
    
  },
  actions: {
    fetchSearchResult: function (context,payload) {
      const searchText=payload.search;
      axios
        .get("https://kitsu.io/api/edge/anime?filter%5Btext%5D=" + searchText)
        .then(function ({ data }) {
          for(let i = 0;i<data.data.length;i++){
          context.commit("saveSearchResult", data.data[i]);}
        });
    }
  }
};

export default searchModule;