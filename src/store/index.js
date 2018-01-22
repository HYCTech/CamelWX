import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import * as api from '../api'

Vue.use(Vuex)

let modules ={

}

let state = {
    loading:false,
    position:'',
    address:"",
    openID:'',
    imgUrl:[]
  
}

let actions={
    setLoading({ commit },info){
        commit('SET_LOADING', info)
   }
       
}

let mutations = {
    SET_LOADING(state,info){
        state.loading = info
    },
    SET_OPENID(state,info){
        state.openID = info
    },
    SET_ADDRESS(state,info){
        state.address = info
        console.log('ddd'+state.address)
    },
    SET_IMGURL(state,info){
        console.log('传进来的值', info)
        state.imgUrl.push(info)
        console.log('复制给数组', state.imgUrl)
        
    },
    
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
