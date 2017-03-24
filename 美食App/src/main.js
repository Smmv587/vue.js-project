import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods'; // 可省略.vue
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

Vue.use(VueRouter);

// 路由器需要根组件
var app = Vue.extend(App);
// 实例化一个router
var router = new VueRouter();
// 定义路由规则
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
// 启动路由器，挂载到#app匹配的元素上
router.start(app, '#app');
