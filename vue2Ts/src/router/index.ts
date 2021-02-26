import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
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
    path: '/form_access',
    name: 'FormAccess',
    component: () => import('../views/FormAccess.vue')
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
    path: '/footer',
    name: 'Footer',
    component: () => import('../views/Footer.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('../views/Grid.vue')
  },
  {
    path: '/icons',
    name: 'Icons',
    component: () => import('../views/Icons.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('../views/Loading.vue')
  },
  {
    path: '/loadmore',
    name: 'Loadmore',
    component: () => import('../views/Loadmore.vue')
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import('../views/Panel.vue')
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('../views/Preview.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    component: () => import('../views/Progress.vue')
  },
  {
    path: '/action-sheet',
    name: 'ActionSheet',
    component: () => import('../views/ActionSheet.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('../views/Dialog.vue')
  },
  {
    path: '/half-screen-dialog',
    name: 'HalfScreenDialog',
    component: () => import('../views/HalfScreenDialog.vue')
  },
  {
    path: '/msg',
    name: 'Msg',
    component: () => import('../views/Msg.vue')
  },
  {
    path: '/msg_success',
    name: 'MsgSuccess',
    component: () => import('../views/MsgSuccess.vue')
  },
  {
    path: '/msg_warn',
    name: 'MsgWarn',
    component: () => import('../views/MsgWarn.vue')
  },
  {
    path: '/msg_text',
    name: 'MsgText',
    component: () => import('../views/MsgText.vue')
  },
  {
    path: '/msg_text_primary',
    name: 'MsgTextPrimary',
    component: () => import('../views/MsgTextPrimary.vue')
  },
  {
    path: '/msg_custom_area_preview',
    name: 'MsgCustomAreaPreview',
    component: () => import('../views/MsgCustomAreaPreview.vue')
  },
  {
    path: '/msg_custom_area_tips',
    name: 'MsgCustomAreaTips',
    component: () => import('../views/MsgCustomAreaTips.vue')
  },
  {
    path: '/msg_custom_area_cell',
    name: 'MsgCustomAreaCell',
    component: () => import('../views/MsgCustomAreaCell.vue')
  },
  {
    path: '/picker',
    name: 'Picker',
    component: () => import('../views/Picker.vue')
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../views/Toast.vue')
  },
  {
    path: '/topTips',
    name: 'TopTips',
    component: () => import('../views/TopTips.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import('../views/Navbar.vue')
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: () => import('../views/Tabbar.vue')
  },
  {
    path: '/search-bar',
    name: 'SearchBar',
    component: () => import('../views/SearchBar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
