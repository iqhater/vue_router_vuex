import Vue from "vue";
import Vuex from "vuex";
import booking from "./modules/booking";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    booking,
    user
  }
});
