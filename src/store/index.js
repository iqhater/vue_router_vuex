import "es6-promise/auto";
import { createStore } from "vuex";
import booking from "./modules/booking";
import user from "./modules/user";
import faq from "./modules/faq";

export default createStore({
  modules: {
    booking,
    user,
    faq,
  },
});
