<template>
  <div class="has-footer">
    <ui-carousel :carousels="carousels"></ui-carousel>
    <ui-nav></ui-nav>
    <img src="static/logo.png">
    <div class="logo"></div>
  </div>
</template>
<style lang="less" scoped>
  .logo {
    height: 200px;
    background: url(./../assets/logo.png) no-repeat;
  }
</style>
<script>
  import uiNav from './../components/uiNav.vue';
  import uiCarousel from './../components/uiCarousel.vue';
  export default{
    data(){
      return {
        msg: 'hello vue',
        carousels: []
      }
    },
    components: {
      'ui-nav': uiNav,
      'ui-carousel': uiCarousel
    },
    created: function () {
      const self = this;
      this.$get("member_auth");
      this.$post("member_auth", {}, function (data) {
      });
      self.carousels = [{name: 1}, {name: 2}, {name: 3}];
    }
  }
</script>
