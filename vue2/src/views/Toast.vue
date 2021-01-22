<template>
  <Page title="Toast" desc="弹出式提示" type="white" :padding="false">
    <weui-button type="default" @click="success()">成功提示</weui-button>
    <weui-button type="default" @click="warn()">失败提示</weui-button>
    <weui-button type="default" @click="loading()">加载中提示</weui-button>
    <weui-button type="default" @click="info()">文字提示</weui-button>
  </Page>
</template>
<script>
import Page from "@/components/Page.vue";

export default {
  components: { Page },
  methods: {
    success: function () {
      this.$toast.success("已成功");
    },
    warn: function () {
      this.$toast.warn("获取连接失败");
    },
    loading: function () {
      this.$toast.loading("加载中", { duration: 0 });
      setTimeout(() => {
        this.$toast.hide();
      }, 4000);
    },
    info: function () {
      this.$toast.info("文字提示");
    },
  },
};
</script>