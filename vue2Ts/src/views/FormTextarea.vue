<template>
  <Page type="white" :padding="false" :showFooter="false">
    <weui-form title="文本域" desc="输入更多内容的输入区域样式展示">
      <weui-form-control>
        <weui-form-group title="问题描述">
          <weui-textarea
            v-model="question"
            placeholder="请描述你所发生的问题"
            :rows="3"
          ></weui-textarea>
        </weui-form-group>
      </weui-form-control>
      <weui-form-opr>
        <weui-button>确定</weui-button>
      </weui-form-opr>
    </weui-form>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  data() {
    return {
      question: '',
    }
  },
  components: { Page },
})
</script>