// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
import './permission'
import menuContext from '@/components/menuContext'
import menuContextItem from '@/components/menuContext/menuContextItem'
import store from './store'
import router from './router'

Vue.use(menuContext)
Vue.use(menuContextItem)
Vue.component('menu-context',menuContext)
Vue.component('menu-context-item',menuContextItem)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
