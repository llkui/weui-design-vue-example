import Vue from 'vue'
import WeuiVue from 'weui-design-vue'
import 'weui-design-vue/lib/weui-design-vue.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(WeuiVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')