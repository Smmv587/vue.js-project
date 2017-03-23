import Vue from 'vue';
import App from './App';
import VueRouter from './vue-router';
import goods from './components/goods/goods';

Vue.use(VueRouter);

var app = Vue.extend(App);
var router = new VueRouter();

router.map({
  '/goods': {
    component: goods
  }
});

router.start(app, '#app');
