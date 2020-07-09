import Vue from 'vue'
import tips from './u-top-tips.vue'

const tipsBox = Vue.extend(tips)

tips.install = function (options) {
  

  let instance = new tipsBox({
    // data: options
  }).$mount()
	
  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.show(options)
  })
}

export default tips