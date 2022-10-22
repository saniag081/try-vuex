const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: 'Canal 1', message: [ 1 ] },
        { id: 2, name: 'Canal 2', message: [ 1 ] },
        { id: 3, name: 'Canal 3', message: [ 1 ] },
        { id: 4, name: 'Canal 4', message: [ 1 ] },
      ],
    };
  },
  getters: {
    getChannels: (state) => (search) => {
      return state.channels.filter((channel) => (
        channel.name.toLowerCase().includes(search.toLowerCase())
      ));
    },
  },
};

export default module;