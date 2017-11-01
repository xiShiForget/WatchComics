<template>
  <div class="header">
    <div class="content">
      <div class="tab-item" >
        <router-link to="/discovery/a">推荐</router-link>
      </div>
      <div class="tab-item" >
        <router-link to="/discovery/0" >分类</router-link>
      </div>
    </div>
    <div class="search">
      <i class="icon-search"></i>
    </div>

  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    top: 0;
    height: 43px;
    width: 100%;
    text-align: center;
    background: white;
    .content {
      display: flex;
      margin: 16px 40%;
      width: 80px;
      height: 20px;
      border: 1px solid black;
      border-radius: 13px;
      background-color:rgba(0,0,0,0.7);
      line-height: 20px;
      .tab-item{
        flex: 1;
        width: 30px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        border-radius: 13px;
        &>a{
          display: block;
          color: white;
          &.active{
            background-color: white;
            color: orange;
            border-radius: 13px;
          }
        }
      }
    }
    .search {
      position: absolute;
      right: 20px;
      top: 20px;
    }
    /*.a {*/
      /*display: none;*/
    /*}*/

  }
</style>
