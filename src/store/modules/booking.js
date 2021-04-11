export default {
  state: {
    booking: {
      startDate: "",
      endDate: "",
      checkboxes: [],
      dropdown: "",
    },
  },
  actions: {},
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
    },
  },
  getters: {
    bookingInfo(state) {
      return state.booking;
    },
  },
};
