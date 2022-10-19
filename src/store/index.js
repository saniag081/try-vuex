import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      username: 'Santiago',
    };
  },
});

export default store;