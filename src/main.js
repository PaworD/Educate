import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import Courses from './components/Courses.vue'
import Students from './components/Students.vue'
import babelPolyfill from 'babel-polyfill'
import CreateCourse from './components/CreateCourse.vue'
import CourseData from './components/CourseData.vue'


Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
      {path: '/', component: Dashboard, name: 'Dashboard'},
      {path: '/dashboard', component: Dashboard, name: 'Dashboard', meta: {requiresAuth: true} },
      {path: '/courses', component: Courses, name: 'Courses',  meta: {requiresAuth: true} },
      {path: '/students', component: Students, name: 'Students',  meta: {requiresAuth: true} },
      {path: '/courses/create', component: CreateCourse, name: 'CreateCourse',  meta: {requiresAuth: true} },
      {path: '/courses/:id', component: CourseData, name: 'CourseData',  meta: {requiresAuth: true} },
    ]}
  )

router.beforeEach( (to, from, next)=> {
  let routerAuthCheck = true

  if (to.matched.some(record => record.meta.requiresAuth)){
    if (routerAuthCheck){
      next()
    } else {
      router.replace('/login')
    }
  }
  else {
      next()
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
