import Vue, { createApp } from "vue";
import Root from "./App.vue";
import router from "./router";
import store from "./store";
// import { ElLoading, ElMessage } from "element-plus";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import locale from "element-plus/lib/locale";
import en from "element-plus/lib/locale/lang/en";
import i18n from "./i18n";
locale.use(en);

// Vue.config.productionTip = false;

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;

  if (!language) {
    language = "en";
  }

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

createApp(Root)
  .use(router)
  .use(store)
  .use(i18n)
  // .use(ElMessage)
  // .use(ElLoading)
  .use(ElementPlus)
  .mount("#app");
/* new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).mount("#app"); */
