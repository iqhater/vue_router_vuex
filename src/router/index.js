import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import i18n from "../i18n";

i18n.locale = "en"

const routes = [{
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/:lang",
    component: {
      template: "<router-view />",
    },
    children: [{
        path: "/:lang",
        name: "home",
        component: Home,
      },
      {
        path: "user",
        name: "user",
        // route level code-splitting
        // this generates a separate chunk (user.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import("../views/User.vue"),
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
});

export default router;