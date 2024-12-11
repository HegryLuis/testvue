import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import SecondPage from "../views/SecondPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/second",
    name: "SecondPage",
    component: SecondPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
