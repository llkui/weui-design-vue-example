<template>
  <Page title="Loadmore" desc="加载更多" type="white" :padding="false">
    <weui-loadmore tip="正在加载" :loading="true"></weui-loadmore>
    <weui-loadmore tip="暂无数据" line></weui-loadmore>
    <weui-loadmore dot line></weui-loadmore>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page }
}
</script>