import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
// import {
//   Button,
//   Select,
//   Dropdown,
//   DatePicker,
//   Dialog,
//   Checkbox,
//   Input
// } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import locale from "element-ui/lib/locale";
import en from "element-ui/lib/locale/lang/en";
// import ru from "element-ui/lib/locale/lang/ru-RU";
// import es from "element-ui/lib/locale/lang/es";
// import de from "element-ui/lib/locale/lang/de";
import i18n from "./i18n";

Vue.use(ElementUI, {
  locale: en
  // i18n: (key, value) => i18n.t(key, value)
});
// Locale.i18n((key, value) => i18n.t(key, value));
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Dropdown);
// Vue.use(DatePicker);
// Vue.use(Dialog);
// Vue.use(Checkbox);
// Vue.use(Input);
Vue.config.productionTip = false;

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

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
