<template>
  <Page title="TopTips" desc="顶部提示条" type="white" :padding="false">
    <weui-button @click="showToptips(true)" type="default"
      >显示提示条</weui-button
    >
    <weui-button @click="showToptips(false)" type="default"
      >隐藏提示条</weui-button
    >
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  components: { Page },
  methods: {
    showToptips(value: boolean): void {
      if (value) {
        this.$toptips.show('错误提示', { duration: 0 })
      } else {
        this.$toptips.hide()
      }
    },
  },
})
</script>