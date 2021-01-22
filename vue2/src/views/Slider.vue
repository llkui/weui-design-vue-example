<template>
  <Page title="Slider" desc="滑块">
    <weui-slider
      :percent="0"
      :disabled="true"
      :showValue="false"
    ></weui-slider>
    <br />
    <weui-slider :percent.sync="percent"></weui-slider>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  data () {
    return {
      percent: 50
    }
  },
  components: { Page }
}
</script>