// 导入组件，组件必须声明 name
import Demo from './src/Demo.vue'

// 为组件添加 install 方法，用于按需引入
Demo.install = Vue => {
  Vue.component(Demo.name, Demo)
}

export default Demo
