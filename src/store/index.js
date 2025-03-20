import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [] // Массив для хранения ссылок
  },
  mutations: {
    // Мутация для добавления ссылки
    ADD_LINK(state, link) {
      state.links.push(link);
    },
    // Мутация для удаления ссылки
    REMOVE_LINK(state, index) {
      state.links.splice(index, 1);
    }
  },
  actions: {
    // Действие для добавления ссылки
    addLink({ commit }, link) {
      commit('ADD_LINK', link);
    },
    // Действие для удаления ссылки
    removeLink({ commit }, index) {
      commit('REMOVE_LINK', index);
    }
  },
  getters: {
    // Геттер для получения всех ссылок
    allLinks(state) {
      return state.links;
    }
  }
});