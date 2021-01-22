<template>
  <Page title="Progress" desc="进度条" type="white">
    <weui-progress :percent="progress1"></weui-progress>
    <br />
    <weui-progress :percent="progress2"></weui-progress>
    <br />
    <weui-progress :percent="progress3"></weui-progress>
    <br />
    <br />
    <weui-button @click="upload()" :disabled="isLoading">上传</weui-button>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  data() {
    return {
      isLoading: false,
      progress1: 0,
      progress2: 50,
      progress3: 80,
    }
  },
  components: { Page },
  methods: {
    upload(): void {
      this.isLoading = true
      this.progress1 = 0
      this.progress2 = 50
      this.progress3 = 80
      let complete = 0
      const uploadInterval = setInterval(() => {
        let progress1 = this.progress1 + 1
        let progress2 = this.progress2 + 1
        let progress3 = this.progress3 + 1
        if (progress1 <= 100) {
          if (progress1 === 100) {
            complete++
          }

          this.progress1 = progress1
        }
        if (progress2 <= 100) {
          if (progress2 === 100) {
            complete++
          }

          this.progress2 = progress2
        }
        if (progress3 <= 100) {
          if (progress3 === 100) {
            complete++
          }

          this.progress3 = progress3
        }

        if (complete >= 3) {
          this.isLoading = false
          clearInterval(uploadInterval)
        }
      }, 20)
    },
  },
})
</script>