import { createStore } from 'vuex';

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
    },
  },

  actions: {
    setToken(context, payload) {
      context.commit('setToken', payload);
    },
  },
});
