export default {
  state: {
    tabs: {
      names: []
    }
  },
  actions: {},
  mutations: {
    updateTabs(state, tabs) {
      state.tabs.names = tabs;
    }
  },
  getters: {
    tabsInfo(state) {
      return state.tabs;
    }
  }
};