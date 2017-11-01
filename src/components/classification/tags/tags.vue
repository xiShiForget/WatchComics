<template>
  <div class="content">
    <ul>
      <li v-for="item in tags" >
        <router-link :to="'/discovery/' + item.tag_id + '/assortment'" >{{item.title}}</router-link>
    </li>
    </ul>
<router-view :tags="tags" :topics="topics"></router-view>
  </div>
</template>

<script>
    export default {
      props: {
        tags: {
          type: Array
        },
        topics:{
            type:Array
        }
      },
    }
</script>

<style lang="less" scoped>
.content{
  position: fixed;
  width: 100%;
  height: 60px;
  top: 47px;
  background: white;
  z-index: 20;
 ul{
   width: 100%;
   height: 100%;
   li{
     width: 11%;
     margin-left: 10px;
     height: 30px;
     font-size: 13px;
     line-height: 30px;
     text-align: center;
     float: left;

     /*.a{*/
       /*display: inline-block;*/
       /*height: 50%;*/
     /*}*/
     .active{
       display: block;
       border-bottom:1px solid orange;
       color: rgba(255,165,0,0.8);
     }
   }
 }
}
</style>
