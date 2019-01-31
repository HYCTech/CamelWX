import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import upload from '../components/upload.vue'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      redirect: 'index'
    }, {
      path: '/index',
      name: 'index',
      component: _import('index')
    }, {
      path: '/evaluation',
      name: '评价',
      component: _import('evaluation')
    }, {
      path: '/order',
      name: '接单',
      component: _import('order')
    }, {
      path: '/priRepair',
      name: '个人报修',
      component: _import('priRepair')
    }, {
      path: '/pubRepair',
      name: '公共报修',
      component: _import('pubRepair')
    }, {
      path: '/repairInfo',
      name: '报修信息',
      component: _import('repairInfo')
    }, {
      path: '/userBinde',
      name: '用户绑定',
      component: _import('userBind')
    }, {
      path: '/userInfo',
      name: '用户信息',
      component: _import('userInfo')
    }, {
      path: '/validation',
      name: '验收',
      component: _import('validation')
    }, {
      path: '/receive',
      name: '报价信息',
      component: _import('receive')
    }, {
      path: '/receiveInfo',
      name: '物业通知信息',
      component: _import('receiveInfo')
    }, {
      path: '/myReceive',
      name: '我的维修',
      component: _import('myReceive')
    }, {
      path: '/orderDetails',
      name: '维修信息',
      component: _import('orderDetails')
    }, {
      path: '/repairList',
      name: '维修单',
      component: _import('worker/index')
    },
    {
      path: '/wxPay',
      name: '支付',
      component: _import('wxPay')
    },

    {
      path: '/upload',
      name: 'upload',
      component: upload
    }
  ]
})
