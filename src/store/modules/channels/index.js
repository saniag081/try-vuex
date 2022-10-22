const module = {
  namespaced: true,
  state() {
    return {
      channel: null,
      channels: [
        { id: 1, name: 'Canal 1', message: null },
        { id: 2, name: 'Canal 2', message: null },
        { id: 3, name: 'Canal 3', message: null },
        { id: 4, name: 'Canal 4', message: null },
      ],
    };
  },
  getters: {
    getChannels: (state, getters, rootState, rootGetters) => (search) => {
      return state.channels
        .filter((channel) => (
          channel.name.toLowerCase().includes(search.toLowerCase())
        ))
        .map((channel) => {
          const message = rootGetters['messages/getUnreadMessage'](channel.id)
          return {
            ...channel,
            message,
          };
        });
    },
  },
  mutations: {
    setChannel(state, payload) {
      state.channel = payload;
    }
  }
};

export default module;