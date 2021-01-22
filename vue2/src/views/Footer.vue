<template>
  <Page title="Footer" desc="页脚" :showFooter="false">
    <weui-footer>
      <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
    </weui-footer>
    <br />
    <br />
    <weui-footer>
      <weui-footer-links>
        <weui-footer-link>底部链接</weui-footer-link>
      </weui-footer-links>
      <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
    </weui-footer>
    <br />
    <br />
    <weui-footer>
      <weui-footer-links>
        <weui-footer-link>底部链接</weui-footer-link>
        <weui-footer-link>底部链接</weui-footer-link>
      </weui-footer-links>
      <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
    </weui-footer>
    <weui-footer fixed>
      <weui-footer-links>
        <weui-footer-link>WeUI首页</weui-footer-link>
      </weui-footer-links>
      <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
    </weui-footer>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page }
}
</script>