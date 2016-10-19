<template>
  <div class="nav">
    <div>
      <router-link to="mall">商城</router-link>
    </div>
    <div>
      <router-link to="cart">购物车</router-link>
    </div>
    <div>
      <router-link to="personal">个人中心</router-link>
    </div>
  </div>
</template>
<style lang="less">
  @nav-height: 50px;
  .nav {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: @nav-height;
    background: #f5f5f5;
    box-shadow: 0 -1px 1px #eee;
    div {
      flex: 1;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: @nav-height;
        text-decoration: none;
        color: black;
      }
    }
  }
</style>
