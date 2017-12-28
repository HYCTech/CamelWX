import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import * as api from '../api'

Vue.use(Vuex)

let modules ={

}

let state = {
    loading:false
  
}

let actions={
    setLoading({ commit },info){
        commit('SET_LOADING', info)
   }
       
}

let mutations = {
    SET_LOADING(state,info){
        state.loading = info
    }
    
}
let getters = {
    loading :state=>state.loading
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules
})
