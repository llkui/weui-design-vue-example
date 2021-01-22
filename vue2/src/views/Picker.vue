<template>
  <Page
    title="Picker"
    desc="多列选择器，需要配合js实现"
    type="white"
    :padding="false"
  >
    <weui-button @click="show()" type="default">单列选择器</weui-button>
    <weui-button @click="showTwo()" type="default">多列选择器</weui-button>
    <weui-button @click="showDate()" type="default">日期选择器</weui-button>
  </Page>
</template>
<script>
import Page from "@/components/Page.vue";

export default {
  components: { Page },
  data () {
    return {
      type: "4",
      traffic: {
        type: "4",
        code: "4002",
      },
      date: "2017-09-07",
    };
  },
  methods: {
    show: function () {
      const options = [
        { label: "飞机票", value: "1" },
        { label: "火车票", value: "2" },
        { label: "的士票", value: "3" },
        { label: "公交票", value: "4" },
        { label: "其他(disabled)", value: "5", disabled: true },
        { label: "好的", value: "6" },
      ];
      const defaultIndex = options.findIndex(
        (item) => item.value === this.type
      );
      const config = {
        title: "单列选择器",
        options: options,
        default: [defaultIndex === -1 ? 0 : defaultIndex],
      };
      this.$picker.show(config).then((res) => {
        this.type = res[0].value;
      });
    },
    showTwo: function () {
      const options = [
        {
          label: "飞机票",
          value: "1",
          children: [
            { label: "1001", value: "1001" },
            { label: "1002", value: "1002" },
          ],
        },
        {
          label: "火车票",
          value: "2",
          children: [
            { label: "2001", value: "2001" },
            { label: "2002", value: "2002" },
          ],
        },
        {
          label: "的士票",
          value: "3",
          children: [
            { label: "3001", value: "3001" },
            { label: "3002", value: "3002" },
          ],
        },
        {
          label: "公交票",
          value: "4",
          children: [
            { label: "4001", value: "4001" },
            { label: "4002", value: "4002" },
          ],
        },
        {
          label: "其他(disabled)",
          value: "5",
          disabled: true,
          children: [
            { label: "5001", value: "5001" },
            { label: "5002", value: "5002" },
          ],
        },
        {
          label: "好的",
          value: "6",
          children: [
            { label: "6001", value: "6001" },
            { label: "6002", value: "6002" },
            { label: "6003", value: "6003" },
          ],
        },
      ];
      const typeIndex = options.findIndex(
        (item) => item.value === this.traffic.type
      );
      let codeIndex = 0;
      if (typeIndex !== -1) {
        codeIndex = options[typeIndex].children.findIndex(
          (item) => item.value === this.traffic.code
        );
      }
      const config = {
        title: "多列选择器",
        depth: 2,
        options: options,
        default: [
          typeIndex === -1 ? 0 : typeIndex,
          codeIndex === -1 ? 0 : codeIndex,
        ],
      };
      this.$picker.show(config).then((res) => {
        this.traffic = {
          type: res[0].value,
          code: res[1].value,
        };
      });
    },
    showDate: function () {
      const config = {
        title: "日期选择器",
        start: "2016-12-29",
        end: "2030-2-2",
        default: this.date,
      };
      this.$picker.showDate(config).then((res) => {
        this.date = res;
      });
    },
  },
};
</script>