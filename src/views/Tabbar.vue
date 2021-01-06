<template>
  <Page :padding="false" :showFooter="false">
    <weui-tab>
      <weui-tab-panel></weui-tab-panel>
      <weui-tabbar :selectedIndex.sync="selectedIndex">
        <weui-tabbar-item
          :icon="tabbar"
          label="微信"
          :count="8"
        ></weui-tabbar-item>
        <weui-tabbar-item :icon="tabbar" label="通讯录"></weui-tabbar-item>
        <weui-tabbar-item :icon="tabbar" label="发现" dot></weui-tabbar-item>
        <weui-tabbar-item :icon="tabbar" label="我"></weui-tabbar-item>
      </weui-tabbar>
    </weui-tab>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'
import tabbar from './../assets/icon_tabbar.png'

export default {
  data () {
    return {
      selectedIndex: 0,
      tabbar: tabbar
    }
  },
  components: { Page }
}
</script>