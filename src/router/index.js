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
      component: () => import('../views/Home.vue'),
      children:[
        {
          path: '/user',
          name: 'User',
          component: () => import('../views/userinfos/Users.vue')
        },
        {
          path: '/role',
          name: 'Role',
          component: () => import('../views/userinfos/Role.vue')
        },
        {
          path: '/priority',
          name: 'Priority',
          component: () => import('../views/userinfos/Priority.vue')
        }
      ]
    }
  ],
  model: "history"
})
