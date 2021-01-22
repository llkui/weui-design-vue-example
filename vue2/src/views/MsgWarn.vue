<template>
  <weui-msg type="warn" title="操作失败">
    <template slot="desc">
      内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
      <a href="javascript:">文字链接</a>
    </template>
    <template slot="tips">
      提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
      <a href="javascript:">文字链接</a>
    </template>
    <template slot="btn">
      <weui-button type="default" @click="back()">辅助操作</weui-button>
    </template>
    <template slot="extra">
      <weui-footer>
        <weui-footer-links>
          <weui-footer-link>底部链接文本</weui-footer-link>
        </weui-footer-links>
        <weui-footer-text>Copyright © 2008-2016 weui.io</weui-footer-text>
      </weui-footer>
    </template>
  </weui-msg>
</template>
<script>
export default {
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>