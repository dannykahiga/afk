import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Learn from './views/Learn'
import Course from './views/CourseDetails'
import Explore from './views/Explore'
import Exam from './views/Exam'
import BeginExam from './views/BeginExam'
import SignUp from './views/Signup'
import Login from './views/Login'
import Profile from './views/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam
    },
    {
      path: '/begin_exam',
      name: 'begin_exam',
      component: BeginExam
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
