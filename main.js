import Vue from 'vue'
import App from './App'
import store from './store'
App.mpType = 'app'
Vue.prototype.$store = store
// #ifdef H5
import tips from './components/top-tips'
Vue.prototype.$tips = tips.install;
// #endif

// 全局filters
import * as filters from 'common/filters/format-time.js'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// 全局提示变量定义
Vue.prototype.$message = (message) => {
  uni.showToast({
  	title: message,
  	duration: 2000,
  	icon:'none'
  })
}
// 全局加载变量定义
Vue.prototype.$loading = (title) => {
  uni.showLoading({
  	title: '加载中',
		icon: 'loading',
		mask: true
  })
}
const app = new Vue({
    ...App
})
app.$mount()
