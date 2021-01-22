<template>
  <Page title="Preview" desc="表单预览" :padding="false">
    <weui-preview label="付款金额" value="¥2400.00">
      <weui-preview-item label="商品" value="电动打蛋机"></weui-preview-item>
      <weui-preview-item
        label="标题标题"
        value="名字名字名字"
      ></weui-preview-item>
      <weui-preview-item
        label="标题标题"
        value="很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"
      ></weui-preview-item>
      <template #footer>
        <weui-preview-button>操作</weui-preview-button>
      </template>
    </weui-preview>
    <br />
    <weui-preview label="付款金额" value="¥2400.00">
      <weui-preview-item label="商品" value="电动打蛋机"></weui-preview-item>
      <weui-preview-item
        label="标题标题"
        value="名字名字名字"
      ></weui-preview-item>
      <weui-preview-item
        label="标题标题"
        value="很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"
      ></weui-preview-item>
      <template #footer>
        <weui-preview-button type="default">辅助操作</weui-preview-button>
        <weui-preview-button>操作</weui-preview-button>
      </template>
    </weui-preview>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page }
}
</script>