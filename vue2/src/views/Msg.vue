<template>
  <Page title="Msg" desc="提示页" type="white" :padding="false">
    <weui-button type="default" @click="goUrl('/msg_success')">
      成功提示页
    </weui-button>
    <weui-button type="default" @click="goUrl('/msg_warn')">
      失败提示页
    </weui-button>
    <weui-button type="default" @click="goUrl('/msg_text')">
      无图标提示页
    </weui-button>
    <weui-button type="default" @click="goUrl('/msg_text_primary')">
      无图标提示页
    </weui-button>
    <weui-button type="default" @click="goUrl('/msg_custom_area_preview')">
      key-value场景
    </weui-button>
    <weui-button type="default" @click="goUrl('/msg_custom_area_tips')">
      描述列表场景
    </weui-button>
    <weui-button type="default" @click="goUrl('/msg_custom_area_cell')">
      跳转列表场景
    </weui-button>
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