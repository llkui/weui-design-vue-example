<template>
  <Page
    title="Uploader"
    desc="上传组件，一般配合组件Gallery来使用。"
    :padding="false"
  >
    <weui-cell-group>
      <weui-cell>
        <template #title>
          <weui-uploader
            :afterRead="afterRead"
            v-model="fileList"
            @onClick="preview($event)"
            showCount
          ></weui-uploader>
        </template>
      </weui-cell>
    </weui-cell-group>
    <weui-gallery
      :visible="show"
      :src="img.url"
      :canDelete="true"
      @onDelete="deleteGallery()"
      @onClick="hide()"
    ></weui-gallery>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'
const pic = require('./../assets/pic.png')

export default Vue.extend({
  data() {
    return {
      show: false,
      fileList: [
        { id: 1, url: pic, status: 'done' },
        { id: 2, url: pic, status: 'done' },
        { id: 3, url: pic, status: 'done' },
        { id: 4, url: pic, status: 'failed' },
        { id: 5, url: pic, status: 'uploading' },
      ],
      fileId: 0,
      img: {
        id: 0,
        url: '',
      },
    }
  },
  components: { Page },
  mounted(): void {
    this.$nextTick(() => {
      this.fileId = this.fileList.length
    })
  },
  methods: {
    afterRead(file: any): void {
      this.fileList.push({
        id: ++this.fileId,
        url: file.content,
        status: 'done',
      })
    },
    preview($event: any): void {
      this.img = {
        id: $event.id,
        url: $event.url,
      }
      this.show = true
    },
    deleteGallery(): void {
      this.show = false
      this.fileList.forEach((item, index) => {
        if (item.id === this.img.id) {
          this.fileList.splice(index, 1)
        }
      })
    },
    hide(): void {
      this.show = false
    },
  },
})
</script>