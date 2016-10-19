// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from './customize/router';
import "./customize/directive";
import "./customize/mixin";
import App from "./App";

Vue.config.devtools = true;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
