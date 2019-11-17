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
import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, {
  locale
});
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Dropdown);
// Vue.use(DatePicker);
// Vue.use(Dialog);
// Vue.use(Checkbox);
// Vue.use(Input);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
