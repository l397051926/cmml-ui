import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'

    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../components/Home.vue'),
      children:[
        {
          path: '/user',
          name: 'User',
          component: () => import('../components/userinfos/Users.vue')
        },
        {
          path: '/role',
          name: 'Role',
          component: () => import('../components/userinfos/Role.vue')
        },
        {
          path: '/priority',
          name: 'Priority',
          component: () => import('../components/userinfos/Priority.vue')
        }
      ]
    }
  ],
  model: "history"
})
