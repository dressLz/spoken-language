import Vue from 'vue'
import App from './App'

import request from './utils/request.js'
import api from './api/index.js'
import url from './utils/config.js'

// 阻止显示生产模式的消息
Vue.config.productionTip = false

Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
