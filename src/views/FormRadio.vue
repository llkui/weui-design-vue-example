<template>
  <Page type="white" :padding="false" :showFooter="false">
    <weui-form title="单选框样式展示">
      <weui-form-group>
        <weui-radio-group v-model="value" :showMore="true">
          <weui-radio value="1">cell standard</weui-radio>
          <weui-radio value="2">cell standard</weui-radio>
        </weui-radio-group>
      </weui-form-group>
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
      value: '2'
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