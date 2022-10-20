import { COMMIT_UPDATE_USERNAME } from '@/common/mutations-types.js';
import { getUser } from '@/api';

const module = {
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
    [COMMIT_UPDATE_USERNAME](state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async updateUsername({ commit }, username) {
      const user = await getUser(1);
      console.log(user);
      commit(COMMIT_UPDATE_USERNAME, user.username);
    },
  },
}

export default module;
