<template>
  <Page title="Grid" desc="九宫格" :padding="false">
    <weui-grid>
      <weui-grid-item v-for="(count, index) in 9" :key="index" :icon="tabbar">
        Grid
      </weui-grid-item>
    </weui-grid>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'
const tabbar = require('./../assets/icon_tabbar.png')

export default Vue.extend({
  data() {
    return {
      tabbar: tabbar,
    }
  },
  components: { Page },
})
</script>