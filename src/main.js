import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vant from 'vant'
// import 'vant/lib/button/style/less'
import request from '@/utils/request'

Vue.prototype.$http = request

Vue.config.productionTip = false

// Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
