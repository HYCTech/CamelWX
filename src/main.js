// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import plugin from '@/plugins'

import cookie from 'cookies-js'

import YDUI from 'vue-ydui';
import './router/interception'  //路由拦截
import 'vue-ydui/dist/ydui.rem.css';
import './assets/flexible'
import 'vue-ydui/dist/ydui.base.css';
import './assets/scss/base.scss'
import './assets/scss/main.scss'

import AMap from 'vue-amap';

window.Cookies = cookie;
Vue.config.productionTip = false
Vue.use(plugin, {});
Vue.use(YDUI);





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
