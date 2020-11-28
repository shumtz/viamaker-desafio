import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alunos: [],
    escolas: [],
    turmas: []
  },
  actions: {
    async getAlunos({ commit }) {
      const response = await axios("http://127.0.0.1:1337/alunos");
      const data = await response.data;
      console.log(data);
      commit("SET_ALUNOS", data);
    },
    async getEscolas({ commit }) {
      const response = await axios("http://127.0.0.1:1337/escolas");
      const data = await response.data;
      console.log(data);
      commit("SET_ESCOLAS", data);
    },
    async getTurmas({ commit }) {
      const response = await axios("http://127.0.0.1:1337/turmas");
      const data = await response.data;
      console.log(data);
      commit("SET_TURMAS", data);
    }
  },
  mutations: {
    SET_ALUNOS(state, alunos) {
      state.alunos = alunos;
    },
    SET_ESCOLAS(state, escolas) {
      state.escolas = escolas;
    },
    SET_TURMAS(state, turmas) {
      state.turmas = turmas;
    }
  },
  modules: {}
});
