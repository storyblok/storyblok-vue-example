import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Hello
    }
  ]
})
