import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.directive('title', {
  inserted: function(el, binding) {
    document.title = '【兎老师】碧蓝航线舰娘强度榜' + binding.value
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')