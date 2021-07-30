import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    boardGames: []
  },
  mutations: {
    setFavorites (state, data) {
      state.favorites = data
    },
    setBoardGames (state, data) {
      state.boardGames = data
    },
    setFilterFavorites (state, filtro) {
      if (!filtro === '10') {
        return state.favorites.filter(favorites => favorites.Category === filtro)
      }
      console.log(state)
      return state.favorites
    }
  },
  actions: {
    getFavorites ({ commit }) {
      axios.get('http://localhost:5000/favorites').then((response) => {
        console.log(response.data)
        commit('setFavorites', response.data)
      })
    },
    getBoardGames ({ commit }) {
      axios.get('http://localhost:5000/boardgame').then((response) => {
        console.log(response.data)
        commit('setBoardGames', response.data)
      })
    }
  },
  modules: {
  },
  getters: {
    allFavorites: (state, filtro) => {
      if (!filtro === '10') {
        return state.favorites.filter(favorites => favorites.Category === filtro)
      }
      return state.favorites
    }
  }
})
