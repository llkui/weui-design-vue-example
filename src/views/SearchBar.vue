<template>
  <Page title="SearchBar" desc="搜索栏" :padding="false">
    <weui-search-bar v-model="value" @input="input($event)"></weui-search-bar>
    <weui-cell-group class="searchbar-result" v-if="value.length > 0">
      <weui-cell title="实时搜索文本" is-active></weui-cell>
      <weui-cell title="实时搜索文本" is-active></weui-cell>
      <weui-cell title="实时搜索文本" is-active></weui-cell>
      <weui-cell title="实时搜索文本" is-active></weui-cell>
    </weui-cell-group>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    input: function (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}
/deep/ .searchbar-result .weui-cell__bd {
  padding: 2px 0 2px 20px;
  color: var(--weui-FG-1);
}
</style>