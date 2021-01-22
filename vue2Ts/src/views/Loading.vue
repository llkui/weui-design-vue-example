<template>
  <Page title="Loading" desc="加载中">
    <div class="loading_demo">
      <weui-loading></weui-loading>
      <weui-loading type="primary"></weui-loading>
      <weui-loading type="brand"></weui-loading>
      <weui-loading type="transparent"></weui-loading>
    </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  components: { Page },
})
</script>
<style scoped>
.loading_demo {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.weui-loading,
.weui-primary-loading {
  margin: 0 5px;
}
</style>