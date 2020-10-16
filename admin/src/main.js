import Vue from 'vue'
import 'normalize.css/normalize.css' //  CSS初始化默认样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // 语言包 i18n
import '@/styles/index.scss' // 全局 css
import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon图标库
import '@/permission' // 权限控制
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'  // markdown编辑器
Vue.use(mavonEditor)

// 全局过滤器
import * as filters from "./filters/index"
Object.keys(filters).forEach(keys=>{
  Vue.filter(keys,filters[keys])
})


Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
