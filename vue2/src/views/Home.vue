<template>
  <Page
    desc="WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。"
    title="Weui Design Vue"
  >
    <ul>
      <li
        :class="selected == index ? 'js_show' : ''"
        :key="index"
        @click="changeMenu(index)"
        v-for="(menu, index) of menuList"
      >
        <weui-flex>
          <weui-flex-item>{{ menu.name }}</weui-flex-item>
          <img :src="menu.icon" alt />
        </weui-flex>
        <div class="page__category">
          <weui-cell-group class="page__category-content">
            <weui-cell
              :key="itemIndex"
              :title="item.title"
              @click.native="goUrl(item.url)"
              is-link
              v-for="(item, itemIndex) of menu.children"
            ></weui-cell>
          </weui-cell-group>
        </div>
      </li>
    </ul>
  </Page>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'
import IconForm from './../assets/icon_nav_form.png'
import IconLayout from './../assets/icon_nav_layout.png'
import IconFeedback from './../assets/icon_nav_feedback.png'
import IconNav from './../assets/icon_nav_nav.png'
import IconSearch from './../assets/icon_nav_search.png'

export default {
  name: 'Home',
  data () {
    return {
      selected: -1,
      menuList: [
        {
          name: '表单',
          icon: IconForm,
          children: [
            { title: 'Button', url: '/button' },
            { title: 'Form', url: '/form' },
            { title: 'List', url: '/list' },
            { title: 'Slider', url: '/slider' },
            { title: 'Uploader', url: '/uploader' },
          ]
        }, {
          name: '基础组件',
          icon: IconLayout,
          children: [
            { title: 'Article', url: '/article' },
            { title: 'Badge', url: '/badge' },
            { title: 'Flex', url: '/flex' },
            { title: 'Footer', url: '/footer' },
            { title: 'Gallery', url: '/gallery' },
            { title: 'Grid', url: '/grid' },
            { title: 'Icons', url: '/icons' },
            { title: 'Loading', url: '/loading' },
            { title: 'Loadmore', url: '/loadmore' },
            { title: 'Panel', url: '/panel' },
            { title: 'Preview', url: '/preview' },
            { title: 'Progress', url: '/progress' },
          ]
        }, {
          name: '操作反馈',
          icon: IconFeedback,
          children: [
            { title: 'ActionSheet', url: '/action-sheet' },
            { title: 'Dialog', url: '/dialog' },
            { title: 'Half-screen Dialog', url: '/half-screen-dialog' },
            { title: 'Msg', url: '/msg' },
            { title: 'Picker', url: '/picker' },
            { title: 'Toast', url: '/toast' },
            { title: 'TopTips', url: '/toptips' },
          ]
        }, {
          name: '导航相关',
          icon: IconNav,
          children: [
            { title: 'Navbar', url: '/navbar' },
            { title: 'Tabbar', url: '/tabbar' },
          ]
        }, {
          name: '搜索相关',
          icon: IconSearch,
          children: [
            { title: 'Search Bar', url: '/search-bar' },
          ]
        },
      ]
    }
  },
  components: {
    Page
  },
  methods: {
    goUrl: function (url) {
      this.$router.push(url)
    },
    changeMenu: function (index) {
      if (this.selected != index) {
        this.selected = index
      } else {
        this.selected = -1
      }
    }
  }
}
</script>

<style lange="scss" scoped>
ul {
  list-style: none;
}
li {
  margin: 8px 0;
  background-color: var(--weui-BG-2);
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
}
li:first-child {
  margin-top: 0;
}
.weui-flex {
  padding: 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.weui-flex img {
  width: 30px;
  height: 30px;
}
body[data-weui-theme='dark'] .weui-flex img {
  -webkit-filter: invert(100) hue-rotate(180deg);
  filter: invert(100) hue-rotate(180deg);
}
.weui-cells {
  margin-top: 0;
}
.weui-cell {
  padding-left: 20px;
  padding-right: 20px;
}
.page__category {
  height: 0;
  overflow: hidden;
}
li.js_show .page__category {
  height: auto;
}
.page__category-content {
  opacity: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
li.js_show .page__category-content {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
</style>
