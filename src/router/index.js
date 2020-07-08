import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo.vue'
import User from '@/components/userinfos/users.vue'
import Role from '@/components/userinfos/Role.vue'
import Priority from '@/components/userinfos/Priority.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/role',
      name: 'Role',
      component: Role
    },
    {
      path: '/priority',
      name: 'Priority',
      component: Priority
    }
  ]
})
