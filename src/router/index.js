import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)
const home = () => import('../views/Home.vue')
const users = () => import('../views/userinfos/Users.vue')
const role = () => import('../views/userinfos/Role.vue')
const priority = () => import('../views/userinfos/Priority.vue')
const login = () => import('../views/login/Login.vue')

 const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'

    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      children:[
        {
          path: '/',
          redirect: '/user'
        },
        {
          path: '/user',
          name: 'User',
          component: users
        },
        {
          path: '/role',
          name: 'Role',
          component: role
        },
        {
          path: '/priority',
          name: 'Priority',
          component: priority
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        requireAuth: true
      },
      component: login
    }
  ],
  model: "history"
 })

router.beforeEach((from, to, next) => {
  // store.state
  if (from.path === '/login') {
    next()
  }else{
    if (store.state.token) { // vuex.state判断token是否存在
      console.log("login token")
      next() // 已登录
    } else {
      console.log('no token')
      next({
        path: '/login'
      })
    }
  }
})

export default router
