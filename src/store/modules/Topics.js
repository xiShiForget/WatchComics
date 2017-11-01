/**
 * Created by 178063117 on 2017/10/17.
 */
import * as types from '../mutationsType'

const state = {
  count:[],
  like:[]
}

const getters = {
  allCount:state => state.count,
  allLike:state=> state.like
}

const mutations = {
  [types.RECEIVE_COMMENTS_COUNT](state,{topics}){
    console.log('6666')
    let num =[]
    topics.forEach(item => {
      if(item.comments_count){
        if((Math.floor(item.comments_count/10000))>10){
          num.push(parseInt(Math.floor(item.comments_count/10000)))
        }else {
          num.push(parseInt(Math.floor(item.comments_count)))
        }}


    })

    state.count=num
    console.log(state.count)
  },
  [types.RECEIVE_LIKES_COUNT](state,{topics}){
    let likes =[]
    topics.forEach(item => {
      if(item.likes_count){
        if((Math.floor(item.likes_count/10000))>10){
          likes.push(parseInt(Math.floor(item.likes_count/10000)))
        }else {
          likes.push(parseInt(Math.floor(item.likes_count)))
        }}


    })

    state.like=likes

  }
}


export default {
  state,
  getters,
  mutations
}
