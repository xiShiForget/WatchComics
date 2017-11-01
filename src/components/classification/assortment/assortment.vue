<template>
 <div class="content">
   <ul>
     <li>
       <router-link to="/discovery/0/assortment/Topics">推荐</router-link>
     </li>
     <li>
       <router-link to="/discovery/assortment/">最火热</router-link>
     </li>
     <li>
       <router-link to="/discovery/assortment/">新上架</router-link>
     </li>

   </ul>
   <router-view :topics="topics"></router-view>
 </div>
</template>

<script>
    export default {
      props: {
        topics: {
          type: Array
        }
      },
    }
</script>

<style lang="less" scoped="">
.content{
  width: 100%;
  height: 15px;
  margin-top: 66px;
  background-color: white;
  ul{
    display: flex;
    width: 46%;
    li{
      flex: 1 1 46%;
      width: 46%;
      border-right: 1px solid rgb(240,240,240);
      height: 15px;
      line-height: 15px;
      text-align: center;
      font-size: 13px;
      .active{
        color: orange;
      }
    }
  }

}
</style>
