<template>
  <Page :padding="false" :showFooter="false" type="white">
    <weui-form :title="'跳转列表项'">
      <weui-form-control>
        <weui-form-group>
          <weui-cell :title="'cell standard'" is-link></weui-cell>
          <weui-cell :title="'cell standard'" is-link></weui-cell>
        </weui-form-group>
      </weui-form-control>
    </weui-form>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  components: { Page },
})
</script>