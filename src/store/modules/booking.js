export default {
  state: {
    booking: {
      startDate: "",
      endDate: "",
      checkboxes: [],
      dropdown: ""
    }
  },
  actions: {
    /* initStartDate(ctx) {
              ctx.commit("updateStartDate", new Date());
            },
            initEndDate(ctx, days) {
              const date = this.initStartDate(ctx);
              date.setDate(date.getDate() + days);
              ctx.commit("updateEndDate", date);
            } */
  },
  mutations: {
    updateStartDate(state, startDate) {
      state.booking.startDate = startDate;
      localStorage.setItem("startDate", startDate);
    },
    updateEndDate(state, endDate) {
      state.booking.endDate = endDate;
      localStorage.setItem("endDate", endDate);
    },
    updateCheckboxes(state, checkboxes) {
      state.booking.checkboxes = checkboxes;
    },
    updateDropdown(state, option) {
      state.booking.dropdown = option;
    }
  },
  getters: {
    bookingInfo(state) {
      return state.booking;
    }
  }
};
