<template>
    <div class="content">
      <router-link to="/comics/date/today"><img src="../../../image/close.png" width="23" height="23"></router-link>
      <div class="title">
        <div class="new">
          <router-link to="newRatings">最新评论</router-link>
        </div>
        <div class="host">
          <router-link to="hostRatings">最热评论</router-link>
        </div>
      </div>
      <router-view :ratings="ratings"></router-view>
    </div>
</template>

<script>
    export default {
      props: {
        ratings: {
          type: Array
        }
      },
    }
</script>

<style lang="less" scoped>
.content{
  position: fixed;
  width: 100%;
  height: 40px;
  img{
    position: absolute;
    left: 10px;
    margin-top:9px;
  }
  .title{
    position: absolute;
    display: flex;
    width: 50%;
    height: 25px;
    left: 25%;
    margin-top: 6px;
    border: 1px solid #cccccc;
    line-height: 25px;
    text-align: center;
   .new{
     flex: 1;
   }
    .host{
      flex: 1;
    }
    .active{
      display: inline-block;
      width: 100%;
     background:#D4D4D4;
      color: white;
    }
  }
}


</style>
