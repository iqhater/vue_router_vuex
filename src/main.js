import {
  createApp
} from "vue";
import Root from "./App.vue";
import router from "./router";
import store from "./store";
import {
  ElLoading,
  ElMessage,
  ElDropdown,
  ElDatePicker,
  ElTimePicker,
  ElDivider,
  ElInput,
  ElButton,
  ElDialog,
  ElCheckbox,
  ElCollapse,
  ElForm,
  ElSelect,
  ElMessageBox,
  ElAlert
} from "element-plus";
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "element-plus/packages/theme-chalk/src/base.scss";

// import locale from "element-plus/lib/locale";
// import en from "element-plus/lib/locale/lang/en";
import i18n from "./i18n";
// import { use } from "element-plus/lib/locale";
// locale.use(en);
// i18n.locale = "en"

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;

  if (!language) language = "en";

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

createApp(Root)
  .use(router)
  .use(store)
  .use(i18n)
  .use(ElMessage)
  .use(ElDropdown)
  .use(ElDatePicker)
  .use(ElTimePicker)
  .use(ElDivider)
  .use(ElInput)
  .use(ElLoading)
  .use(ElButton)
  .use(ElDialog)
  .use(ElCheckbox)
  .use(ElCollapse)
  .use(ElForm)
  .use(ElSelect)
  .use(ElMessageBox)
  .use(ElAlert)
  // .use(ElementPlus, {
  //   locale: en
  // })
  .mount("#app");