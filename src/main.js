import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/store";
import HomePage from "./HomePage.vue";
import SearchPage from "./SearchPage.vue";
import CategoryPage from "./CategoryPage.vue";
import ShowPage from "./ShowPage.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/all", component: CategoryPage },
  { path: "/most-popular", component: CategoryPage },
  { path: "/newest", component: CategoryPage },
  { path: "/recently-updated", component: CategoryPage },
  { path: "/show-page/:id", component: ShowPage }
];
const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior(){
    return{x:0,y:0}
  }
});

new Vue({
  render: (h) => h(App),
  router,store
}).$mount("#app");
