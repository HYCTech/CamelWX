import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import upload from '../components/upload.vue'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index' 
    },
    {
      path: '/index',
      name: 'index',
      component:_import('index')
    },
    {
      path: '/upload',
      name: 'upload',
      component:upload
    }
  ]
})
