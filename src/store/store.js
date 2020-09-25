import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home.js";
import show from "./modules/show.js";


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home,
    show:show,
    
  }
});

export default store;
