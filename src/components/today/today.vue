<template>
<div  class="comic-wrapper" ref="comicWrapper">
  <ul>
    <li v-for="(item,index) in today" class="content">
      <div class="top">
        <span class="labelText" :style="{backgroundColor:item.label_color}">{{item.label_text}}</span>
        <h3 class="bookName">{{item.topic.title}}</h3>
        <div class="below">
          <span class="nickName">作者: {{item.topic.user.nickname}}</span>
        </div>
        <div class="corpora">
          <span>全集  ></span>
        </div>
      </div>
      <div class="middle">
        <img :src="item.cover_image_url" width="100%" height="200">
      </div>
      <div class="bottom">
        <h4 class="title">{{item.title}}</h4>
        <div class="counts">
          <div class="thumbs-up" @click ="actives(index,today)">
            <i class="icon-heart"  :class ="{'likes': item.is_liked}"></i>
            <span class="likes-count">{{allCounts2[index]}}<span v-if="allCounts2[index] != item.likes_count &&allCounts2[index] != item.likes_count+1 &&allCounts2[index] != item.likes_count-1 ">万</span>
          </span>
          </div>
          <div class="ratings" @click = 'comments(index,today)'>
            <router-link to="/ratings">
              <i class="icon-bubble2"></i>
              <span class="comments-count">{{allCounts1[index]}}<span v-if="allCounts1[index] != item.comments_count">万</span>
          </span>
            </router-link>
          </div>
          <router-view v-if="item.can_view==false" ></router-view>
        </div>
      </div>
    </li>
  </ul>

</div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import{mapGetters,mapMutations} from 'vuex'
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
    created(){
        this.$nextTick(()=> {
            document.addEventListener('touchmove',this.scrollTest,{passive:true})
          this.scrollTest()
        })
    },
      methods: {
        ...mapMutations(['RECEIVE_TODAY_LIKES']),
        actives(index,arr){
            let i = index
           arr[i].is_liked=!arr[i].is_liked
          if(arr[i].is_liked===true){
               arr[i].likes_count++
          }else {
            arr[i].likes_count--
          }
          this.RECEIVE_TODAY_LIKES({today:arr})
        console.log(arr[i].likes_count)
      },
        comments(index,arr){
          let i = index
          arr[i].can_view =! arr[i].can_view
        },
       scrollTest(){
           if(!this.testScroll){
               this.testScroll = new IScroll(this.$refs.comicWrapper,{
                   click:true
               })
           }
           else {
               this.testScroll.refresh()
           }
       }
      },
      computed:{
        ...mapGetters(['allCounts1','allCounts2']),
      }
    }
</script>

<style lang="less" scoped>
  .comic-wrapper{
    position: fixed;
    top: 82px;
    bottom: 40px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: -20;
    box-sizing: border-box;
    overflow: hidden;
      .content {
        position: relative;
        border-bottom: 2px solid #F7FAF7;
        .top {
          width: 100%;
          height: 50px;
          .labelText {
            display: inline-block;
            margin-left: 10px;
            margin-top: 10px;
            width: 30px;
            height: 16px;
            line-height: 18px;
            text-align: center;
            color: #ffffff;
            font-size: 12px;
          }
          .bookName {
            position: absolute;
            left: 45px;
            top: 10px;
            width: 70%;
            overflow: hidden;
            font-weight: 700;
            color: rgba(0,0,0,0.8);
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .below {
            position: absolute;
            top: 30px;
            width: 100%;
            height: 18px;
            font-size: 14px;
            left: 9px;
            font-weight: 700;
            color: #cccccc;
          }
          .corpora {
            position: absolute;
            right: 10px;
            top: 18px;
            font-size: 13px;
            font-weight: 700;
            color: #cccccc;
          }
        }
        .bottom {
          display: flex;
          width: 100%;
          height: 45px;
          .title {
            display: inline-block;
            flex: 1 1 60%;
            width: 40%;
            height: 45px;
            line-height: 45px;
            font-size: 13px;
            margin-left: 10px;
            color: black;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .counts{
            flex: 1 1 40%;
            width: 40%;
            display: flex;
            .thumbs-up {
              flex: 1;
              font-size: 13px;
              height: 45px;
              line-height: 45px;
              color: #cccccc;
              font-weight: 700;
              .likes {
                color: lightcoral;
              }
            }
            .ratings {
              flex: 1;
              font-size: 13px;
              height: 45px;
              line-height: 45px;
              color: #cccccc;
              font-weight: 700;
            }
          }
        }
      }

    }

</style>
