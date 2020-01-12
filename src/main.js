import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Alert,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Checkbox,
  Select,
  Option,
  Button,
  DatePicker,
  Form,
  FormItem,
  Collapse,
  CollapseItem,
  Container,
  Divider,
  Loading,
  Message
} from "element-ui";
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale";
import en from "element-ui/lib/locale/lang/en";
// import ru from "element-ui/lib/locale/lang/ru-RU";
// import es from "element-ui/lib/locale/lang/es";
// import de from "element-ui/lib/locale/lang/de";
import i18n from "./i18n";

Vue.use(Alert);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(Divider);

Vue.use(Loading.directive);
locale.use(en);
// locale.i18n((key, value) => i18n.t(key, value));

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

// Vue.use(DatePicker, {
//   locale: ru
//   // i18n: (key, value) => i18n.t(key, value)
// });
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
