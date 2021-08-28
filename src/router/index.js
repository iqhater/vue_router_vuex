import {
  createRouter,
  createWebHistory
} from "vue-router";
import i18n from "../i18n";

i18n.locale = "en"

const routes = [{
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../pages/404.vue"),
  },
  {
    path: "/:lang",
    component: {
      template: "<router-view />",
    },
    beforeEnter: (to, from) => {

      const locales = ["en", "ru", "es", "de"];
      const exists = locales.find(locale => locale === to.params.lang)

      if (!exists) return {
        name: "404",
        params: {
          pathMatch: to.path.split('/').slice(1)
        },
        query: to.query,
        hash: to.hash,
      }
    },
    children: [{
        path: "/:lang",
        name: "home",
        component: () => import("../pages/Home.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import("../pages/User.vue"),
      },
      {
        path: "options",
        name: "options",
        component: () => import("../pages/Options.vue"),
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("../pages/Faq.vue"),
      },
      {
        path: "order",
        name: "order",
        component: () => import("../pages/Order.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;