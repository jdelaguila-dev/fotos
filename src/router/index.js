import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import BaseLayout from "../layouts/BaseLayout.vue";

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      { path: "", name: "home", component: Home },
      { path: "/report", name: "report", component: () => import("../views/Report.vue") },
      { path: "/about", name: "about", component: () => import("../views/About.vue") },
      // { path: "/register", name: "register", component: () => import("../views/Register.vue") },
      // { path: "/contact", name: "contact", component: () => import("../views/Contact.vue") },
      // { path: "/login", name: "login", component: () => import("../views/Login.vue") },
      // { path: "/profile", name: "profile", component: () => import("../views/Profile.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;