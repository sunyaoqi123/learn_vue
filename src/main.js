import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#" + Math.random().toString(16).slice(2,8);
  }
})

Vue.directive('theme',{
  bind(el,binding,vnode){
      el.style.maxWidth='800px';
  }
})

//自定义过滤器
/*Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})*/

Vue.filter("snippet",function(value){
  return value.slice(0,170) + "......";
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')