import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      username: 'Santiago.prueba',
    };
  },
  getters: {
    firstName: (state) => (caracter) => {
      return state.username.split('').join(caracter);
    },
    // firstName(state) {
    //   return state.username.split('.')[0];
    // },
  },
  mutations: {
    updateUsername(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    updateUsername({ commit }, username) {
      commit('updateUsername', username);
    },
  },
});

export default store;