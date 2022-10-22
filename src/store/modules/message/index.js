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
        {
          id: 3,
          author: 2,
          message: 'canal 2 - mensaje 2',
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
    getUnreadMessage: (state, getters) => (channelId) => {
      return getters.getMessages(channelId).filter((message) => !message.read).length;
    },
  },
};

export default module;