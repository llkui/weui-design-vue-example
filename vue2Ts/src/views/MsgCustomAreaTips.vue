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
      <weui-list-tips>
        <weui-list-tips-item>列表提示项</weui-list-tips-item>
        <weui-list-tips-item>列表提示项</weui-list-tips-item>
        <weui-list-tips-item>列表提示项</weui-list-tips-item>
      </weui-list-tips>
    </template>
  </weui-msg>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    back(): void {
      this.$router.go(-1)
    },
  },
})
</script>