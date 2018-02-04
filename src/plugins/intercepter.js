import axios from 'axios'
import _ from 'lodash'
import store from '@/store'
import config from '@/config'
import router from '../router'
import * as api from "@/api/index.js"
import { mapState } from "vuex"
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog'
const requests = []

export default (Vue) => {
    
    Object.defineProperties(Vue.prototype, {
            $http: {
                value: axios
            }
        })
        //axios配置
    axios.defaults.baseURL = config[process.env.NODE_ENV].host
    axios.defaults.timeout = 10000
    axios.defaults.timeout = 10000
        // 添加拦截器
        
    

    axios.interceptors.request.use(function(config) {
        store.dispatch('setLoading', true)
        Loading.open('加载中...')
        // store.dispatch('SET_OPENID', true)
        requests.push(config)
        return config
    }, function(error) {
        store.dispatch('setLoading', false)
        return Promise.reject(error)
    })
    axios.interceptors.response.use(function(response) {
        _.remove(requests, r => {
            return r === response.config
        }) 
        
        if(!requests.length){
            Loading.close()
            setTimeout(() => {
                store.dispatch('setLoading', false)
           }, 300)
        }
        if(response.data.code){
            Toast({
                mes:response.data.msg,
                imeout: 1500,
                icon: 'error'
            })
            return Promise.reject(response.data)
        }

        return response.data
    }, function(error) {
        store.dispatch('setLoading', false)
        Loading.close()
        if (error.response) {
            console.log(error.response.status)
            switch (error.response.status) {
                case 401:
                    console.log('401 未授权')
                    break
                case 500:
                    console.log('500')
                    break
                default:
                    console.log('发生错误了')
            }
        } else {
            console.log('超时')
        }
        return Promise.reject(error)
    })

}
