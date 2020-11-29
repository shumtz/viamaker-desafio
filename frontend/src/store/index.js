import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const URL = "http://127.0.0.1:1337";

Vue.use(Vuex);

// Eu optei usar Vuex pra poder manipular o state mais rapido sem ter que copiar muito codigo.

export default new Vuex.Store({
  // Aqui são os meus states, onde eu obrigatoriamente tenho que passar um valor, sendo ele vazio ou não.
  state: {
    alunos: [],
    escolas: [],
    turmas: []
  },
  // Aqui ficam as chamadas da api, prefiri usar Axios por motivos pessoais, mas eu poderia muito bem usar Fetch
  actions: {
    async getAlunos({ commit }) {
      const response = await axios(`${URL}/alunos`);
      const data = await response.data;
      commit("SET_ALUNOS", data);
    },
    async getEscolas({ commit }) {
      const response = await axios(`${URL}/escolas`);
      const data = await response.data;
      commit("SET_ESCOLAS", data);
    },
    async getTurmas({ commit }) {
      const response = await axios(`${URL}/turmas`);
      const data = await response.data;
      commit("SET_TURMAS", data);
    }
  },
  // Aqui eu faço as chamadas das mutations, onde eu uso pra passar os dados da minha função para o codigo final.
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
