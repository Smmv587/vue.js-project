<template>
  <div>
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
  import header from './components/header/header';
  export default {
     data () {
      return {
        seller: {}
      };
     },
     created(){
        this.$http.get('/api/seller').then(response => {
          this.someData = response.body;
          }, response => {
        });
      }
     },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .table
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom: 1px solid rgba(7,17,27,0.1)
    .table-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.v-link-active
          color: rgb(240,20,20)
</style>
