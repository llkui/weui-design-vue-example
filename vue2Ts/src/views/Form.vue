<template>
  <Page desc="表单页" title="Form" type="white">
    <weui-button @click="goUrl('/form_page')" type="default">
      表单结构
    </weui-button>
    <weui-button @click="goUrl('/form_input_status')" type="default">
      输入框状态
    </weui-button>
    <weui-button @click="goUrl('/form_vcode')" type="default">
      验证码
    </weui-button>
    <weui-button @click="goUrl('/form_checkbox')" type="default">
      复选框
    </weui-button>
    <weui-button @click="goUrl('/form_access')" type="default">
      跳转列表项
    </weui-button>
    <weui-button @click="goUrl('/form_radio')" type="default">
      单选框
    </weui-button>
    <weui-button @click="goUrl('/form_switch')" type="default">
      开关
    </weui-button>
    <weui-button @click="goUrl('/form_select')" type="default">
      原生选择框
    </weui-button>
    <weui-button @click="goUrl('/form_select_primary')" type="default">
      模拟选择框
    </weui-button>
    <weui-button @click="goUrl('/form_textarea')" type="default">
      文本域
    </weui-button>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  components: { Page },
  methods: {
    goUrl(url: string): void {
      this.$router.push(url)
    },
  },
})
</script>