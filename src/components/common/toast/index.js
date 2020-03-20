import Toast from './Toast';

const obj = {};

obj.install = function (Vue) {
  // console.log(Vue)
  
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2. 通过new方法，根据组件构造器，创建组件对象
  const toast = new toastContrustor()

  // 3. 将组建对象手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  // 4. 挂在的元素就是toast.$el
  document.body.appendChild(toast.$el)

  // 5. 将导入的组件挂载到Vue原型上
  Vue.prototype.$toast = toast

}

export default obj;