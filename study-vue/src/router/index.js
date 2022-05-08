import Vue from 'vue'
import vueRouter from 'vue-router'
import News from '../pages/News'
import Message from '../pages/Message'
Vue.use(vueRouter)
const router= new vueRouter({
    routes: [
      {
        path: '/message',
        component: Message
      },
      {
        path: '/news',
        component: News
      },
      {
        path: '/',
        component: Message
      }
    ]
  })
export default router
