import Vue from 'vue'
import Router from 'vue-router'

import indexpage from '@/components/indexpage'
import loginpage from '@/components/loginpage'

import webtoonindex from '@/components/webtoonindexpage'
import webtoonshow from '@/components/webtoonshowpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: indexpage
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage
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
