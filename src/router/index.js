import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Button.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/form_page',
    name: 'FormPage',
    component: () => import('../views/FormPage.vue')
  },
  {
    path: '/form_input_status',
    name: 'FormInputStatus',
    component: () => import('../views/FormInputStatus.vue')
  },
  {
    path: '/form_vcode',
    name: 'FormVcode',
    component: () => import('../views/FormVcode.vue')
  },
  {
    path: '/form_checkbox',
    name: 'FormCheckbox',
    component: () => import('../views/FormCheckbox.vue')
  },
  {
    path: '/form_radio',
    name: 'FormRadio',
    component: () => import('../views/FormRadio.vue')
  },
  {
    path: '/form_switch',
    name: 'FormSwitch',
    component: () => import('../views/FormSwitch.vue')
  },
  {
    path: '/form_select',
    name: 'FormSelect',
    component: () => import('../views/FormSelect.vue')
  },
  {
    path: '/form_select_primary',
    name: 'FormSelectPrimary',
    component: () => import('../views/FormSelectPrimary.vue')
  },
  {
    path: '/form_textarea',
    name: 'FormTextarea',
    component: () => import('../views/FormTextarea.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import('../views/Slider.vue')
  },
  {
    path: '/uploader',
    name: 'Uploader',
    component: () => import('../views/Uploader.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import('../views/Badge.vue')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import('../views/Flex.vue')
  },
  {
    path: '/search-bar',
    name: 'SearchBar',
    component: () => import('../views/SearchBar.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router