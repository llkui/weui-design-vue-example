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
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'
const tabbar = require('./../assets/icon_tabbar.png')

export default Vue.extend({
  data() {
    return {
      selectedIndex: 0,
      tabbar: tabbar,
    }
  },
  components: { Page },
})
</script>