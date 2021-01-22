<template>
  <Page :padding="false" :showFooter="false">
    <weui-tab>
      <weui-navbar :selectedIndex.sync="selectedIndex">
        <weui-navbar-item title="选项一"></weui-navbar-item>
        <weui-navbar-item title="选项二"></weui-navbar-item>
        <weui-navbar-item title="选项三"></weui-navbar-item>
      </weui-navbar>
      <weui-tab-panel></weui-tab-panel>
    </weui-tab>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  data () {
    return {
      selectedIndex: 0
    }
  },
  components: { Page }
}
</script>