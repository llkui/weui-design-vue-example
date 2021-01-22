<template>
  <Page :padding="false" :showFooter="false" type="white">
    <weui-form title="复选框样式展示">
      <weui-form-control>
        <weui-form-group>
          <weui-checkbox-group name="type" v-model="value" :showMore="true">
            <weui-checkbox
              label="standard is dealt for u."
              value="1"
            ></weui-checkbox>
            <weui-checkbox
              label="standard is dealicient for u."
              value="2"
            ></weui-checkbox>
          </weui-checkbox-group>
        </weui-form-group>
      </weui-form-control>
      <weui-form-opr>
        <weui-button @click="next()">下一步</weui-button>
      </weui-form-opr>
      <weui-form-tip>
        <template #tipContent>
          点击下一步即表示<a href="javascript:">同意用户协议</a>
        </template>
      </weui-form-tip>
    </weui-form>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  data () {
    return {
      value: ['2']
    }
  },
  components: { Page },
  methods: {
    next: function () {
      this.$toast.success('已完成')
    }
  }
}
</script>