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
<script>
import Page from '@/components/Page.vue'
import pic from './../assets/pic.png'

export default {
  data () {
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
        url: ''
      }
    }
  },
  components: { Page },
  mounted: function () {
    this.$nextTick(function () {
      this.fileId = this.fileList.length
    })
  },
  methods: {
    afterRead: function (file) {
      this.fileList.push({
        id: ++this.fileId,
        url: file.content,
        status: 'done'
      })
    },
    preview: function ($event) {
      this.img = {
        id: $event.id,
        url: $event.url
      }
      this.show = true
    },
    deleteGallery: function () {
      this.show = false
      this.fileList.forEach((item, index) => {
        if (item.id === this.img.id) {
          this.fileList.splice(index, 1)
        }
      })
    },
    hide: function () {
      this.show = false
    }
  }
}
</script>