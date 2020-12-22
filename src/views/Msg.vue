<template>
  <Page title="Msg" desc="提示页" :padding="false">
    <weui-button @click="goUrl('/msg_success')">成功提示页</weui-button>
    <weui-button @click="goUrl('/msg_warn')">失败提示页</weui-button>
    <weui-button @click="goUrl('/msg_text')">无图标提示页</weui-button>
    <weui-button @click="goUrl('/msg_text_primary')">无图标提示页</weui-button>
  </Page>
</template>
<script>
import Page from "@/components/Page.vue";

export default {
  components: { Page },
  methods: {
    goUrl: function (url) {
      this.$router.push(url)
    }
  },
};
</script>