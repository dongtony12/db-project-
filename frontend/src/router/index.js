import Vue from 'vue'
import Router from 'vue-router'



//import indexpage from '@/components/indexpage'
// import mainpage from '@/components/mainpage'
import loginpage from '@/components/login'
import signuppage from '@/components/signup'
import webtoonindex from '@/components/webtoonindexpage'
import webtoonshow from '@/components/webtoonshowpage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    // {
    //   path: '/mainpage',
    //   name: 'mainpage',
    //   component: mainpage
    // },
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
      path: '/webtoon/:id',
      name: 'webtoonshowpage',
      component: webtoonshow
    }

  ]
})
