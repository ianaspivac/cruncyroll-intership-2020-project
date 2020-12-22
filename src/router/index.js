import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SearchPage from "../views/SearchPage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import ShowPage from "../views/ShowPage.vue";

Vue.use(VueRouter);

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
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return{x:0,y:0}
  }
});

export default router;
