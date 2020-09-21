import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HomePage from "./HomePage.vue";
import SearchPage from "./SearchPage.vue";
import CategoryPage from "./CategoryPage.vue";
import ShowPage from "./ShowPage.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/category-page/:id", component: CategoryPage },
  { path: "/show-page", component: ShowPage }
];
const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
