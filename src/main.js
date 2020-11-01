import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import env from './env'


// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
// 设置超时，必须

// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

axios.defaults.timeout = 8000;
// 拦截器
axios.interceptors.response.use(function(response) {
  // 接口的值
  let res = response.data;
  if (res.status == 0) {
    return res.data;
    // 错误拦截
  } else if (res.status == 10 ) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }

})
// 挂载实例
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,  // key: value, key和value一样可以省略value 
  store,
  render: h => h(App)
}).$mount('#app')
