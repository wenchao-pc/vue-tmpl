<template>
  <div class="personal">
    <div>个人中心</div>
    <ui-nav></ui-nav>
  </div>
</template>
<style lang="less">

</style>
<script>
  import uiNav from "./../components/uiNav.vue";
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {"ui-nav": uiNav}
  }
</script>
