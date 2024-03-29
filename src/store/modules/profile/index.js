import {
  COMMIT_UPDATE_USERNAME,
  COMMIT_SET_STATUS
} from '@/common/mutations-types.js';
import { getUser } from '@/api';

const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '',
      details: {
        id: 1,
        name: 'Santiago',
        avatar: '/avatars/avatar.jpg',
      },
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
    [COMMIT_UPDATE_USERNAME](state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      const user = await getUser(1);
      console.log(user);

      commit(COMMIT_UPDATE_USERNAME, user.username);
      if (state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true });
      }
    },
  },
}

export default module;
