<template>
  <Page
    title="SearchBar"
    desc="搜索栏"
    :padding="false"
  >
    <weui-search-bar v-model="value" @input="input($event)"></weui-search-bar>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page },
  data() {
      return {
          value: ''
      }
  },
  methods: {
    input: function(e) {
        console.log(e)
    }
  }
}
</script>