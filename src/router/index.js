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
      { path: "/upload", name: "upload", component: () => import("../views/Upload.vue") },
      { path: "/todo", name: "todo", component: () => import("../views/Todo.vue") },
      { path: "/profile", name: "profile", component: () => import("../views/Profile.vue") },
      // { path: "/register", name: "register", component: () => import("../views/Register.vue") },
      // { path: "/contact", name: "contact", component: () => import("../views/Contact.vue") },
      // { path: "/login", name: "login", component: () => import("../views/Login.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;