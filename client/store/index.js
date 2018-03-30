import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: []
}

const mutations = {
  RECEIVE_CHARACTERS(state, { characters }) {
    state.data = characters
  }
}

const actions = {
  async FETCH_CHARACTERS({ commit }, name) {
    console.log(name)
    const url = ` http://comicvine.gamespot.com/api/characters/?api_key=fac47f6276aac1c586b6ac130cf86dd97a6999a8&filter=name:${name}&format=json&limit=10`
    const { data } = await axios.get(url)
    commit('RECEIVE_CHARACTERS', { characters: data.results })
    console.log(data.results)
  }
}

const getters = {
  characters: state => {
    return state.data.map(data => {
      return {
        name: data.name,
        url: data.site_detail_url,
        image: data.image ? data.image.small_url : "https://upload.wikimedia.org/wikipedia/commons/e/e9/BlackHood.jpg",
        description: data.deck === '' ? 'No description listed for this character.' : data.deck
      }
    })
  }
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store