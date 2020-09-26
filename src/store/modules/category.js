import axios from "axios";

const categoryModule = {
  state: () => ({
    mostPopular: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    newest: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    recentlyUpdated: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
mostPopularList:[],
newestList:[],
recentlyUpdatedList:[]
  }),
  mutations: {
    saveMostPopular1(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      }   
      state.mostPopularList.push(state.mostPopular);
    },
    saveNewest1(state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      state.newestList.push(state.newest);
    },
    saveRecentlyUpdated1(state, { attributes, id }) {
      state.recentlyUpdated = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      state.recentlyUpdatedList.push(state.recentlyUpdated);
    }
  },
  actions: {
   
    fetchMostPopular1(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          for(let i = 0;i<20;i++){
          context.commit("saveMostPopular1", data.data[i]);}
        });
    },
    fetchNewest1(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-startDate"
        )
        .then(function ({ data }) {
          for(let i = 0;i<20;i++){
          context.commit("saveNewest1", data.data[i]);}
        });
    },
    fetchRecentlyUpdated1(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          for(let i = 0;i<20;i++){
          context.commit("saveRecentlyUpdated1", data.data[i]);}
        });
    }
  }
};

export default categoryModule;
