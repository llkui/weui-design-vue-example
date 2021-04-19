<template>
  <Page title="Toast" desc="弹出式提示" type="white" :padding="false">
    <weui-button type="default" @click="success()">成功提示</weui-button>
    <weui-button type="default" @click="warn()">失败提示</weui-button>
    <weui-button type="default" @click="warn(true)">长文案提示</weui-button>
    <weui-button type="default" @click="loading()">加载中提示</weui-button>
    <weui-button type="default" @click="info()">文字提示</weui-button>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  components: { Page },
  methods: {
    success(): void {
      this.$toast.success('已成功')
    },
    warn(more: boolean): void {
      if (!more) {
        this.$toast.warn('获取连接失败')
      } else {
        this.$toast.warn('此处为长文案提示详情', { more: true })
      }
    },
    loading(): void {
      this.$toast.loading('加载中', { duration: 0 })
      setTimeout(() => {
        this.$toast.hide()
      }, 4000)
    },
    info(): void {
      this.$toast.info('文字提示', {
        callback: () => {
          this.$toast.info('执行callback');
        }
      });
    },
  },
})
</script>