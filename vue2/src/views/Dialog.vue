<template>
  <Page title="Dialog" desc="对话框" type="white">
    <weui-button type="default" @click="showDialog('ios1')">
      iOS Dialog样式一
    </weui-button>
    <weui-button type="default" @click="showDialog('ios2')">
      iOS Dialog样式二
    </weui-button>
    <weui-button type="default" @click="showDialog('android1')">
      Android Dialog样式一
    </weui-button>
    <weui-button type="default" @click="showDialog('android2')">
      Android Dialog样式二
    </weui-button>
    <weui-button type="default" @click="showDialog('ios1F')">
      Event iOS 一
    </weui-button>
    <weui-button type="default" @click="showDialog('ios2F')">
      Event iOS 二
    </weui-button>
    <weui-button type="default" @click="showDialog('android1F')">
      Event Android 一
    </weui-button>
    <weui-button type="default" @click="showDialog('android2F')">
      Event Android 二
    </weui-button>
    <weui-dialog
      :visible="isVisible"
      :type="type"
      :title="title"
      :cancelText="cancelText"
      :okText="okText"
      :showCancel="showCancel"
      @onCancel="handleCancel($event)"
      @onOk="handleOk($event)"
    >
      {{ content }}
    </weui-dialog>
  </Page>
</template>
<script>
import Page from "@/components/Page.vue";

export default {
  components: { Page },
  data () {
    return {
      isVisible: false,
      type: "ios",
      title: "",
      content: "",
      cancelText: "",
      okText: "",
      showCancel: true,
    };
  },
  methods: {
    showDialog (type) {
      switch (type) {
        case 'ios1':
          this.type = 'ios'
          this.title = '弹窗标题'
          this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
          this.cancelText = '辅助操作'
          this.okText = '主操作'
          this.showCancel = true
          this.isVisible = true
          break
        case 'ios2':
          this.type = 'ios'
          this.title = null
          this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
          this.okText = '知道了'
          this.showCancel = false
          this.isVisible = true
          break
        case 'android1':
          this.type = 'android'
          this.title = '弹窗标题'
          this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
          this.cancelText = '辅助操作'
          this.okText = '主操作'
          this.showCancel = true
          this.isVisible = true
          break
        case 'android2':
          this.type = 'android'
          this.title = null
          this.content = '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
          this.cancelText = '辅助操作'
          this.okText = '主操作'
          this.showCancel = true
          this.isVisible = true
          break
        case 'ios1F':
          this.$dialog.show({
            type: 'ios',
            title: '弹窗标题',
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            cancelText: '辅助操作',
            okText: '主操作',
            onCancel: () => {
              this.$toast.info('点击辅助操作')
            },
            onOk: () => {
              this.$toast.info('点击主操作')
            }
          });
          break
        case 'ios2F':
          this.$dialog.show({
            type: 'ios',
            title: null,
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            showCancel: false,
            okText: '知道了'
          });
          break
        case 'android1F':
          this.$dialog.show({
            type: 'android',
            title: '弹窗标题',
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            cancelText: '辅助操作',
            okText: '主操作'
          });
          break
        case 'android2F':
          this.$dialog.show({
            type: 'android',
            title: null,
            content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            cancelText: '辅助操作',
            okText: '主操作'
          });
          break
      }
    },
    handleCancel () {
      this.isVisible = false
    },
    handleOk () {
      this.isVisible = false
    }
  },
};
</script>