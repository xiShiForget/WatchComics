<template>
    <div class="ratings-wrapper" ref="ratingsWrapper">
      <ul>
        <li v-for=" item in ratings" class="content">
          <div class="left">
            <img :src="item.root.user.avatar_url">
          </div>
          <div class="right">
            <span class="nickname">{{item.root.user.nickname}}</span>
            <span class="created_at_info">{{item.root.created_at_info}}</span>
            <div class="content">{{item.root.content}}</div>
            <div class="bottom">
              <span class="text">举报</span>
              <img src="../../../image/赞.png" class="thumbs" width="20" height="20"/>
            </div>
          </div>
        </li>
      </ul>
     </div>

</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
      props: {
        ratings: {
          type: Array
        }
      },
        created(){
          this.$nextTick(()=> {
            document.addEventListener('touchmove',this.scrollTest,{passive:true})
            this.scrollTest()
          })
        },
        methods: {
          scrollTest(){
            if(!this.testScroll){
              this.testScroll = new IScroll(this.$refs.ratingsWrapper,{
                click:true
              })
            }
            else {
              this.testScroll.refresh()
            }
          }
        },
    }
</script>

<style lang="less" scoped>
.ratings-wrapper{
  position: fixed;
  top: 41px;
  bottom: 40px;
  z-index: -20;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #F0F0F0;
  .content{
    position: relative;
    width: 100%;
    height: 150px;
    .left{
      width: 40px;
      height: 100%;
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-left: 10px;
        margin-top: 10px;
      }
    }
    .right{
      margin-left: 50px;
      .nickname{
        position: absolute;
        top: 10px;
        color: gray;
      }
      .created_at_info{
        position: absolute;
        top: 35px;
        font-size: 14px;
        color: rgb(212,212,212);
      }
      .content{
        position: absolute;
        top: 65px;
        height: 40%;
        width: 85%;
        color: rgba(0,0,0,0.7);
      }
      .bottom{
        position: absolute;
        bottom: 15px;
        width: 85%;
        font-size: 13px;
        color: #ccc;
        .thumbs{
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>
