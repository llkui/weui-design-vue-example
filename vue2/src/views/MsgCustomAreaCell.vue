<template>
  <weui-msg title="操作成功">
    <template slot="desc">
      内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
      <a href="javascript:">文字链接</a>
    </template>
    <template slot="btn">
      <weui-button @click="back()">推荐操作</weui-button>
    </template>
    <template slot="custom">
      <weui-cell-group>
        <weui-cell :title="'cell standard'" is-link></weui-cell>
        <weui-cell :title="'cell standard'" is-link></weui-cell>
      </weui-cell-group>
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