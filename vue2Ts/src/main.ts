import Vue from 'vue'
import WeuiDesignVue from 'weui-design-vue'
import 'weui-design-vue/lib/weui-design-vue.css'
import App from './App.vue'
import router from './router'

Vue.use(WeuiDesignVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
