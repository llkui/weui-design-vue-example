<template>
  <Page title="ActionSheet" desc="弹出式菜单" type="white">
    <weui-button type="default" @click="show('ios')"
      >iOS ActionSheet</weui-button
    >
    <weui-button type="default" @click="show('android')"
      >Android ActionSheet</weui-button
    >
  </Page>
</template>
<script>
import Page from "@/components/Page.vue";

export default {
  components: { Page },
  methods: {
    show: function (value) {
      const config = {
        type: value,
        title: "这是一个标题，可以为一行或者两行。",
      };
      const menus = [
        { text: "示例菜单" },
        { text: "示例菜单" },
        { text: "负向菜单", type: "warn" },
      ];
      this.$actionSheet.show(config, menus).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>