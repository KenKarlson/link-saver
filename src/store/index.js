import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        url: 'https://ya.ru',
        title: 'Yandex',
        description: 'Searcher to internet'
      },
      {
        url: 'https://mail.ru',
        title: 'Mail',
        description: 'Mail to internet'
      },
      {
        url: 'https://github.com/KenKarlson',
        title: 'GitHub',
        description: 'My git in internet'
      }
    ] // Начальные данные
  },
  mutations: {
    // Мутация для добавления ссылки
    ADD_LINK(state, link) {
      //state.links.push(link); Добавить в конец
      state.links.unshift(link); //Добавить в начало
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