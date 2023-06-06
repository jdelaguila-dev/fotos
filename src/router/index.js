import { createRouter, createWebHistory } from "vue-router";

router = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];
