import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// 導入 Bootstrap 和 BootstrapVue CSS 文件（順序很重要）
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 使 BootstrapVue 在整個項目中可用
Vue.use(BootstrapVue)
// 可選安裝 BootstrapVue 圖標組件插件
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
