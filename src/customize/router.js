/**
 * Created by kuo zi on 2016/10/12.
 */
import Vue from "vue";
import Router from "vue-router";

import mall from "./../view/mall.vue";
import cart from "./../view/cart.vue";
import personal from "./../view/personal.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior: ()=>({y: 0}),
  routes: [
    {path: "/", component: mall},
    {path: "/mall", component: mall},
    {path: "/cart", component: cart},
    {path: "/personal", component: personal}
  ]
});

