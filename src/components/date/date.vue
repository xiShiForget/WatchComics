<template>
  <div>
    <ul class="content">
      <li>
        <router-link to ="/comics/host/Sun">周日</router-link>
      </li>
      <li>
        <router-link to ="/comics/host/Mon">周一</router-link>
      </li>
      <li><router-link to ="/comics/host/Tue">周二</router-link></li>
      <li>
        <router-link to ="/comics/host/Wed">周三</router-link>
      </li>
      <li>
        <router-link to ="/comics/host/Thu">周四</router-link>
      </li>
      <li>
        <router-link to ="/comics/date/yesterday">昨天</router-link>
      </li>
      <li>
        <router-link to ="/comics/date/today">今天</router-link>
      </li>
    </ul>
    <router-view :today="today"></router-view>
  </div>

</template>

<script>
    export default {
      props: {
        today: {
          type: Array
        }
      },
      data(){
          return{

          }
      },
        }
</script>

<style lang="less" scoped="">
  .content{
    position: fixed;
    display: flex;
    top: 43px;
    background-color: white;
    z-index: 20;
    /*background-color: snow;*/
    width:100%;
    height: 35px;
    /*line-height: 35px;*/
    border-bottom: 2px solid #F7FAF7;
    li{
      flex: 1;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      text-align: center;
      .active{
        display: block;
        border-bottom: 3px solid yellow;

      }
    }

  }
</style>
