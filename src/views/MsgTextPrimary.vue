<template>
  <weui-msg type="null">
    <template slot="desc">
      内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
      <a href="javascript:">文字链接</a>
    </template>
    <template slot="descPrimary">
      内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
    </template>
    <template slot="tips">
      提示详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
      <a href="javascript:">文字链接</a>
    </template>
    <template slot="btn">
      <weui-button @click="back()">推荐操作</weui-button>
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