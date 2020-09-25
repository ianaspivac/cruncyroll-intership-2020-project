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
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.titles.en,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    saveMostPopular(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      state.mostPopularList.push(state.mostPopular);
    },
    saveNewest(state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id
      };
      state.newestList.push(state.newest);
    },
    saveRecentlyUpdated(state, { attributes, id }) {
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
          for(let i=0;i<6;i++){
          context.commit("saveMostPopular", data.data[i]);}
        });
    },
    fetchNewest(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-startDate"
        )
        .then(function ({ data }) {
          for(let j=0;j<6;j++){
          context.commit("saveNewest", data.data[j]);}
        });
    },
    fetchRecentlyUpdated(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          for(let k=0;k<6;k++){
          context.commit("saveRecentlyUpdated", data.data[k]);}
        });
    }
  }
};

export default homeModule;
