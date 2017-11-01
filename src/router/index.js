import Vue from 'vue'
import Router from 'vue-router'

import comicsHeader from  '../components/comics-header/ComicsHeader'
import comics from '../components/comics/comics'
import date from '../components/date/date'
import today from '../components/today/today'
import yesterday from  '../components/yesterday/yesterday.vue'

import assortment from  '../components/classification/assortment/assortment'
import tags from  '../components/classification/tags/tags.vue'
import discoveryHeader from '../components/classification/discoveryHeader/discoveryHeader'
import Topics from '../components/classification/Topics/Topics'
import discovery from '../components/classification/discovery/discovery'

import ratings from '../components/rating/ratingHeader'
import newRatings from '../components/rating/newRatings'
import  hostRatings from '../components/rating/hostRatings'

Vue.use(Router)


export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path:'/comics',component:comics,name:'comics',redirect:{name:'today'},
    children:[
      {path:'/comics/date',name:'date',component:date,redirect:{name:'today'},
      children:[
        {path:'/comics/date/today',component:today,name:'today'
        },
        {path:'/comics/date/yesterday',component:yesterday,name:'yesterday'},
      ]
      },
      {path:'/comics/follow',name:'follow',component:comicsHeader}
    ]
    },
    {path:'/discovery',name:'discovery',component:discovery,redirect:{name:'Topics'},
    children:[
      {path:'0',name:'tags',component:tags,redirect:{name:'Topics'},
      children:[
        {path:'assortment',name:'assortment',component:assortment,redirect:{name:'Topics'},
         children:[
           {path:'Topics',name:'Topics',component:Topics}
         ]
        }
      ]
      },
      {path:'a',component:discoveryHeader,}
    ]
    },
 {path:'/ratings',name:'ratings',component:ratings,redirect:{name:'newRatings'},
 children:[
   {path:'newRatings',name:'newRatings',component:newRatings},
   {path:'hostRatings',name:'hostRatings',component:hostRatings}
 ]
 }
  ]
})
