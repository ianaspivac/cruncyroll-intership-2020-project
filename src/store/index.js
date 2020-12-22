import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home.js";
import show from "./modules/show.js";
import category from "./modules/category.js"
import search from "./modules/search.js"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home,
    show:show,
    category:category,
    search:search
  }
});

export default store;