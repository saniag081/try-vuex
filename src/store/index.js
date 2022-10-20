import { createStore } from 'vuex';
import profile from '@/store/modules/profile';

const store = createStore({
  state() {
    return {};
  },
  getters: {
    // rootState -> get others modules
    // firstName: (state, getters, rootState) => (caracter) => {
    //   return rootState.profile.username.split('').join(caracter);
    // },
  },
  modules: {
    profile,
  },
});

export default store;