const module = {
  namespaced: true,
  state() {
    return {
      contacts: [
        { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' },
      ],
    };
  },
  getters: {
    getContacts: (state) => {
      return state.contacts;
    },
    getContactsById: (state, getters, rootState) => (payload) => {
      const profile = rootState.profile.id;
      if(payload === profile) return rootState.profile.details
      return state.contacts.find((contac) => {
        return contac.id === payload;
      });
    },
  },
};

export default module;