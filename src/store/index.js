import { createStore } from 'vuex';
import { COMMIT_SET_STATUS } from '@/common/mutations-types.js';
import profile from '@/store/modules/profile';
import channels  from '@/store/modules/channels';
import messages from '@/store/modules/message';
import contacts from '@/store/modules/contacts';

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
    channels,
    messages,
    contacts,
  },
});

export default store;