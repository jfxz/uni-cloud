// 自动大小写指令
const toupperFn = (value) => {
  if (value) {
    // console.log(value, value.toLocaleUpperCase())
    return value.toLocaleUpperCase()
  }
  return value
}
export default {
  install (Vue, option) {
    // 1：el指绑定的dom元素
    // 2：binding一个对象，包含指令的很多信息, 使用时可以绑定的值
    // 3：vnodeVUE编译生成的虚拟节点
    Vue.directive('upper', {
      bind: function (el, binding, vnode) {
      }, // 只调用一次，指令第一次绑定到元素时候调用，用这个钩子可以定义一个绑定时执行一次的初始化动作。
      inserted: function () {}, // 被绑定的元素插入父节点的时候调用(父节点存在即可调用，不必存在document中)
      update: function (el, binding, vnode) {
        // console.log(vnode)
        let format = vnode.data.model.expression.split('.')
        // console.log(format)
        let objName = ''
        let objKey = ''
        let objValue = vnode.data.model.value
        if (format.length === 2) {
          objName = format[0]
          objKey = format[1]
          vnode.context.$set(vnode.context[objName], objKey, toupperFn(objValue)) // 解决对象不渲染问题
          // vnode.context[objName][objKey] = toupperFn(objValue)
        } else {
          objName = format[0]
          vnode.context.$set(vnode.context, objName, toupperFn(objValue))
        }
      }, // 被绑定与元素所在模板更新时调用，而且无论绑定值是否有变化，通过比较更新前后的绑定值，忽略不必要的模板更新
      componentUpdated: function () {}, // 被绑定的元素所在模板完成一次更新更新周期的时候调用
      unbind: function () {} // 只调用一次，指令元素解绑的时候调用
    })
  }
}
