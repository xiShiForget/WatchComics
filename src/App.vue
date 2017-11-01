<template>
  <div id="app">
    <div class="bottom">
<ul>
  <li>
    <router-link to ="/comics">漫画</router-link>
  </li>
  <li>
    <router-link to ="/discovery">发现</router-link>
  </li>
  <li>
    <router-link to ="/Community">V社区</router-link>
  </li>
  <li>
    <router-link to ="/mine">我的</router-link>
  </li>
</ul>
    </div>
    <router-view :today="today" :topics="topics" :tags="tags" :ratings="ratings"></router-view>
  </div>
</template>

<script>
  import comics from './components/comics/comics.vue'
  import {mapMutations} from 'vuex'
export default {
  name: 'app',
  data(){
      return{
       today:[],
       tags:[],
       topics:[],
       feeds:[],
        ratings:[]
      }
  },
  methods:{
    ...mapMutations(['RECEIVE_TODAY_COMMENTS','RECEIVE_TODAY_LIKES']),
  },
  components: {
    comics:comics
  },
  created(){
      let self = this
    self.$axios.get('/api/today')
      .then((res)=>{
         res = res.data
        if(res.error ===0){
             self.today = res.data
          this.RECEIVE_TODAY_COMMENTS({today:self.today}),
          this.RECEIVE_TODAY_LIKES({today:self.today})

        }
    })
      .catch((error)=>{
          alert(error)
      })

    self.$axios.get('/api/tags')
      .then((res)=>{
        res = res.data

        if(res.error ===0){
          self.tags = res.data
          console.log(self.tags)
        }
      })
      .catch((error)=>{
        alert(error)
      })

    self.$axios.get('/api/Topics')
      .then((res)=>{
        res = res.data
        if(res.error ===0){
          self.topics = res.data
          console.log(self.topics)
        }
      })
      .catch((error)=>{
        alert(error)
      })
    self.$axios.get('/api/feeds')
      .then((res)=>{
        res = res.data
        if(res.error ===0){
          self.feeds = res.data
          console.log(self.feeds)
        }
      })
      .catch((error)=>{
        alert(error)
      })

    self.$axios.get('/api/ratings')
      .then((res)=>{
        res = res.data
        if(res.error ===0){
          self.ratings = res.data
        }
      })
      .catch((error)=>{
        alert(error)
      })
  }
}
</script>

<style lang="less" scoped>
  .bottom {
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    z-index: 20;
    bottom: 0;
    background-color: white;
    border-top: 1px solid lavender;
    ul {
      width: 100%;
      display: flex;
      li{
        flex: 1;
        height: 30px;
        text-align: center;
      }
    }

    .active{
      color: lightskyblue;
      font-weight: 700;
    }
  }
</style>
