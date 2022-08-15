import Vue from 'vue'
import Router from 'vue-router'
// import test from '@/components/test'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: _import("test")
    }
  ]
})
