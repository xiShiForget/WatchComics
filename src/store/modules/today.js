/**
 * Created by 178063117 on 2017/10/18.
 */
import * as types from '../mutationsType'

const state ={
  counts1:[],
  counts2:[],
  value:false,
  news:[]
    }
const getters = {
  allCounts1:state => state.counts1,
  allCounts2:state=> state.counts2,
  like:state => state.value,
  newDate:state => state.news
}
const mutations = {
  [types.RECEIVE_TODAY_COMMENTS](state,{today}){
    let nums1 =[]
    today.forEach(item => {
      if(item.comments_count){
        if((Math.floor(item.comments_count/10000))>=10){
          nums1.push(parseInt(Math.floor(item.comments_count/10000)))
        }else {
          nums1.push(parseInt(Math.floor(item.comments_count)))
        }}
    })
    state.counts1=nums1
    console.log(state.counts1)
  },
  [types.RECEIVE_TODAY_LIKES](state,{today}){
    let nums2 =[]
    // state.news = today
    today.forEach(item => {
      if(item.likes_count){
        if((Math.floor(item.likes_count/10000))>=10){
          nums2.push(parseInt(Math.floor(item.likes_count/10000)))
        }else {
          nums2.push(parseInt(Math.floor(item.likes_count)))
        }}
    })

    state.counts2=nums2
  },

}

export default {
  state,
  getters,
  mutations
}
