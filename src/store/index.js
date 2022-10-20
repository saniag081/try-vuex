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
  },
  mutations: {
    updateUsername(state, payload) {
      state.username = payload;
    },
  },
    // firstName(state) {
    //   return state.username.split('.')[0];
    // },
});

export default store;