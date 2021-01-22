<template>
  <Page title="Half-screen Dialog" desc="半屏组件">
    <weui-button @click="show('custom')" type="default">样式一</weui-button>
    <weui-button @click="show('dialog')" type="default">样式二</weui-button>
    <weui-half-screen-dialog
      :visible="custom"
      type="custom"
      title="标题"
      @onClose="close('custom')"
    >
      <br />
      <br />
      可放自定义内容
      <br />
      <br />
      <br />
      <br />
    </weui-half-screen-dialog>
    <weui-half-screen-dialog
      :visible="dialog"
      type="dialog"
      title="标题"
      subtitle="标题"
      desc="辅助描述内容，可根据实际需要安排"
      tips="辅助提示内容，可根据实际需要安排"
      :showMore="true"
      cancelText="辅助操作"
      okText="主操作"
      @onClose="close('dialog')"
    >
    </weui-half-screen-dialog>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  components: { Page },
  data() {
    return {
      custom: false,
      dialog: false,
    }
  },
  methods: {
    show(type: string) {
      if (type === 'custom') {
        this.custom = true
      } else {
        this.dialog = true
      }
    },
    close(type: string) {
      if (type === 'custom') {
        this.custom = false
      } else {
        this.dialog = false
      }
    },
  },
})
</script>