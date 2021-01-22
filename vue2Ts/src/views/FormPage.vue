<template>
  <Page :padding="false" :showFooter="false" type="white">
    <weui-form
      desc="展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。"
      title="表单结构"
    >
      <weui-form-control>
        <weui-form-group title="表单组标题">
          <weui-input
            label="微信号"
            placeholder="填写本人微信号"
            v-model="wechat"
          ></weui-input>
          <weui-input
            label="昵称"
            placeholder="填写本人微信号的昵称"
          ></weui-input>
          <weui-input
            label="联系电话"
            placeholder="填写绑定的电话号码"
          ></weui-input>
        </weui-form-group>
      </weui-form-control>
      <weui-form-tip content="表单页提示，居中对齐"></weui-form-tip>
      <weui-form-opr>
        <weui-button :disabled="wechat.length == 0" @click="save()"
          >确定</weui-button
        >
      </weui-form-opr>
      <weui-form-tip content="表单页提示，居中对齐"></weui-form-tip>
      <weui-form-extra>
        <weui-footer>
          <weui-footer-links>
            <weui-footer-link>底部链接文本</weui-footer-link>
          </weui-footer-links>
          <weui-footer-text>Copyright © 2008-2019 weui.io</weui-footer-text>
        </weui-footer>
      </weui-form-extra>
    </weui-form>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  data() {
    return {
      wechat: '',
    }
  },
  components: { Page },
  methods: {
    save(): void {
      this.$toast.success('已完成')
    },
  },
})
</script>
<style lang="scss" scoped>
/deep/ .weui-label {
  width: 4.1em;
}
</style>