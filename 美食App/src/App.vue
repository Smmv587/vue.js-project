<template>
  <div id="app">
    <v-header></v-header>
    <div class="table">
      <div class="table-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="table-item">
        <a v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="table-item">
      <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  // 引用header
  import header from './components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .table
      display:flex
      width:100%
      height:40px
      line-height:40px
      .table-item
        flex:1
        text-align:center
</style>
