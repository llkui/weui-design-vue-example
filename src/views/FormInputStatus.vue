<template>
  <Page :padding="false" :showFooter="false" type="white">
    <weui-form
      desc="可体验表单输入样式，当输入位数不等于16位的时候点击按钮可看到报错样式。"
      title="输入框状态"
    >
      <weui-form-control>
        <weui-form-group title="表单报错">
          <weui-input
            :error.sync="cardError"
            :maxlength="16"
            label="卡号"
            placeholder="请输入16位数卡号"
            v-model="card"
          ></weui-input>
        </weui-form-group>
        <weui-form-group title="表单只读、置灰">
          <weui-input
            :readonly="true"
            label="EMail"
            placeholder="请输入EMail"
            v-model="email"
          ></weui-input>
          <weui-input
            :readonly="true"
            label="微信号"
            placeholder="请输入微信号"
            v-model="wechat"
          ></weui-input>
        </weui-form-group>
      </weui-form-control>
      <weui-form-opr>
        <weui-button :disabled="card.length == 0" @click="save()"
          >确定</weui-button
        >
      </weui-form-opr>
    </weui-form>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  data () {
    return {
      card: '',
      cardError: false,
      email: '1234567',
      wechat: 'WeUI'
    }
  },
  components: { Page },
  methods: {
    save: function () {
      if (this.card.length === 16) {
        this.$toast.success('已完成')
      } else {
        this.cardError = true
        this.$toptips.show('错误提示')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .weui-label {
  width: 3.1em;
}
</style>