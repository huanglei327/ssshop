import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index/index.vue'
import classIndex from '@/views/classify/index/index.vue'
import shopIndex from '@/views/shop/index/index.vue'
import userIndex from '@/views/user/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/classIndex',
      name: 'classIndex',
      component: classIndex
    },
    {
      path: '/shopIndex',
      name: 'shopIndex',
      component: shopIndex
    },
    {
      path: '/userIndex',
      name: 'userIndex',
      component: userIndex
    }
  ]
})
