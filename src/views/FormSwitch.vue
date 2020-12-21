<template>
  <Page type="white" :padding="false" :showFooter="false">
    <weui-form title="开关样式展示">
      <weui-form-control>
        <weui-form-group>
          <weui-switch v-model="value" label="标题文字"></weui-switch>
          <weui-switch
            v-model="valueIE"
            label="兼容IE Edge的版本"
          ></weui-switch>
        </weui-form-group>
      </weui-form-control>
      <weui-form-opr>
        <weui-button @click="save()">确定</weui-button>
      </weui-form-opr>
    </weui-form>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  data () {
    return {
      value: false,
      valueIE: true,
    }
  },
  components: { Page },
  methods: {
    save: function () {
      this.$toast.success('已完成')
    }
  }
}
</script>