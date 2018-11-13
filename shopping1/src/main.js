// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
// 引入store
import store from './store'
import $ from 'jquery'
import 'assets/bootstrap/dist/css/bootstrap.min.css';
import 'assets/bootstrap/dist/js/bootstrap.min.js';
Vue.use(VueResource);
var vm = new Vue({
  //为实例提供挂载元素。值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数
  el: '#app',
  store,
  template:'<App/>',
  components: { App }

});
