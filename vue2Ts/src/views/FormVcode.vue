<template>
  <Page :padding="false" :showFooter="false" type="white">
    <weui-form desc="验证手机号样式" title="验证码">
      <weui-form-control>
        <weui-form-group tips="收不到验证码">
          <weui-input
            :maxlength="11"
            label="手机号"
            placeholder="请输入手机号"
            right-slot
            v-model="mobile"
          >
            <weui-button type="text">
              <weui-icon
                :mini="true"
                @click.native="info()"
                type="info-circle"
              ></weui-icon>
            </weui-button>
          </weui-input>
          <weui-input
            label="验证码"
            placeholder="输入验证码"
            right-slot
            v-model="code"
          >
            <weui-button :inForm="true" type="default">收取验证码</weui-button>
          </weui-input>
        </weui-form-group>
      </weui-form-control>
      <weui-form-tip>
        <template #content>
          <weui-checkbox-agree :animate.sync="agreeAnimate" v-model="agree">
            阅读并同意
            <a>《相关条款》</a>
          </weui-checkbox-agree>
        </template>
      </weui-form-tip>
      <weui-form-opr>
        <weui-button :disabled="code.length == 0" @click="save()"
          >确定</weui-button
        >
      </weui-form-opr>
    </weui-form>
    <weui-half-screen-dialog
      :visible="custom"
      @onClose="close()"
      title="标题"
      type="custom"
    >
      <br />
      <br />可放自定义内容
      <br />
      <br />
      <br />
      <br />
    </weui-half-screen-dialog>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  data() {
    return {
      custom: false,
      mobile: '12345678907',
      code: '',
      agree: false,
      agreeAnimate: false,
    }
  },
  components: { Page },
  methods: {
    info(): void {
      this.custom = true
    },
    close(): void {
      this.custom = false
    },
    save(): void {
      if (!this.agree) {
        this.agreeAnimate = true
      } else {
        this.$toast.success('已完成')
      }
    },
  },
})
</script>
<style lang='scss' scoped >
/deep/ .weui-label {
  width: 3.1em;
}
</style>