import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import i18n from "../i18n";

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "user",
        name: "user",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User.vue"),
      },
      {
        path: "options",
        name: "options",
        component: () => import("../views/Options.vue"),
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("../views/Faq.vue"),
      },
      {
        path: "order",
        name: "order",
        component: () => import("../views/Order.vue"),
      },
      {
        path: "*",
        component: () => import("../views/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;
