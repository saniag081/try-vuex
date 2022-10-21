import { createStore } from 'vuex';
import { COMMIT_SET_STATUS } from '@/common/mutations-types.js';
import profile from '@/store/modules/profile';

const store = createStore({
  state() {
    return {
      status: null,
    };
  },
  mutations: {
    [COMMIT_SET_STATUS](state, payload) {
      state.status =  payload;
    }
  },
  modules: {
    profile,
  },
});

export default store;