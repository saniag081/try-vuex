const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: 'Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1,
        },
        {
          id: 2,
          author: 2,
          message: 'canal 2',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2,
        },
      ]
    }
  },
  getters: {
    getMessages: (state) => (channelId) => {
      return state.messages.filter((menssage) => menssage.channelId === +channelId);
    },
  },
};

export default module;