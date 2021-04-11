export default {
  state: {
    user: {
      firstName: "",
      lastName: "",
      email: "",
    },
  },
  actions: {},
  mutations: {
    updateFirstName(state, name) {
      state.user.firstName = name;
    },
    updateLastName(state, surname) {
      state.user.lastName = surname;
    },
    updateEmail(state, email) {
      state.user.email = email;
    },
  },
  getters: {
    userInfo(state) {
      return state.user;
    },
  },
};
