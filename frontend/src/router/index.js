import Vue from 'vue'
import Router from 'vue-router'



//import indexpage from '@/components/indexpage'
// import mainpage from '@/components/mainpage'
import loginpage from '@/components/login'
import signuppage from '@/components/signup'
import webtoonindex from '@/components/webtoonindexpage'
import webtoonshow from '@/components/webtoonshowpage'

import userlist from '@/components/userlist'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [


    {
      path: '/login',
      name: 'login',
      component: loginpage
    },
    {
      path: '/signup',
      name: 'signup',
      component: signuppage
    },
    {
      path: '/webtoon',
      name: 'webtoonindexpage',
      component: webtoonindex
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: userlist
    },
    {
      path: '/webtoon/:id',
      name: 'webtoonshowpage',
      component: webtoonshow
    }

  ]
})
