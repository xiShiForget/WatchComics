<template>
      <div class="header">
        <div class="content">
          <div class="tab-item" @click="none()">
            <router-link to="/comics/follow">关注</router-link>
          </div>
          <div class="tab-item" @click="show()">
            <router-link to="/comics/date" >热门</router-link>
          </div>
        </div>
        <div class="search">
          <i class="icon-search"></i>
        </div>
        <date :class="{'a': exhibition}"></date>
        <!--<router-view></router-view>-->

      </div>
</template>

<script>
  import date from '../date/date.vue'
    export default {
      data(){
          return{
            exhibition:true
          }
      },
      components: {
        date:date
      },
      methods: {
       show(){
         this.exhibition = false
       },
        none(){
           this.exhibition = true
        }
      }
    }
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    top: 0;
    height: 43px;
    width: 100%;
    text-align: center;
    background: yellow;
    .content {
      display: flex;
      margin: 16px 40%;
      width: 80px;
      height: 20px;
      border: 1px solid black;
      border-radius: 13px;
      background-color: #4d2926;
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
          color: yellow;
          &.active{
            background-color: yellow;
            color: #4d2926;
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
    .a {
      display: none;
    }

  }

</style>
