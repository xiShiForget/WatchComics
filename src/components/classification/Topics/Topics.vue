<template>
<div class="content-wrapper" ref="contentWrapper">
  <ul>
    <li v-for="(item,index) in topics">
      <div class="img">
        <img :src="item.cover_image_url" class="cover">
      </div>
      <div class="describe">
        <h2 class="title">{{item.title}}</h2>
        <span class="category">{{item.category[0]}}</span>
        <span class="category">{{item.category[1]}}</span>
        <div class="num">
          <span>
            <img src="../../../../image/thumbs-up.png" width="15" height="15" style="">
           {{allLike[index]}}
           <span v-if="allLike[index] != item.likes_count">万</span>
          </span>
          <span>
            <i class="icon-bubble2" style="color: darkgray"></i>
             {{allCount[index]}}
            <span v-if="allCount[index] != item.comments_count">万</span>
          </span>
        </div>
      </div>
    </li>
  </ul>
  <router-view :topics="topics" ></router-view>
</div>

</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
import{mapGetters,mapMutations} from 'vuex'
    export default {
      props: {
        topics: {
          type: Array
        }
      },
      created(){
        this.$nextTick(()=> {
            console.log(this.topics,'00000')
          this.RECEIVE_COMMENTS_COUNT({topics:this.topics}),
          this.RECEIVE_LIKES_COUNT({topics:this.topics}),
          document.addEventListener('touchmove',this.scrollTest,{passive:true})
          this.scrollTest()
        })

      },
      methods: {
        ...mapMutations(['RECEIVE_COMMENTS_COUNT','RECEIVE_LIKES_COUNT']),

        scrollTest(){
          if(!this.testScroll){
            this.testScroll = new IScroll(this.$refs.contentWrapper,{
              click:true,
            })
          }
          else {
            this.testScroll.refresh()
          }
        },
      },
      computed:{
        ...mapGetters(['allCount','allLike']),
      }
    }
</script>

<style lang="less" scoped="">
.content-wrapper{
  position: fixed;
  top: 139px;
  bottom: 40px;
  width: 100%;
  z-index: -20;
  box-sizing: border-box;
  overflow: hidden;
  ul{
    li{
      position: relative;
      display: flex;
      width: 100%;
      height: 120px;
      border-bottom: 1px solid gainsboro;
      .img{
        flex: 1 1 48%;
        width: 48%;
        height: 100%;
        overflow: hidden;
        .cover{
          width: 100%;
          height: 120px;
        }
      }

      .describe{
       flex: 1 1 52%;
        width: 52%;
        margin-left: 15px;
        top:0;
        .title{
          width: 170px;
          height: 20px;
         margin-top: 12px;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
          font-weight: 600;
          color: rgba(0,0,0,0.7);
        }
        .category{
          display: inline-block;
          margin-top: 8px;
          font-size: 11px;
          color: gray;
        }
        .num{
          margin-top: 35px;
          font-size: 13px;
          color: rgba(0,0,0,0.7);
        }
      }
    }
  }
}
</style>
