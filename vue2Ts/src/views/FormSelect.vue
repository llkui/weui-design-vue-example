<template>
  <Page type="white" :padding="false" :showFooter="false">
    <weui-form title="原生选择框">
      <weui-form-control>
        <weui-form-group>
          <weui-select name="type" v-model="type">
            <weui-option value="1" label="微信号"></weui-option>
            <weui-option value="2" label="QQ号"></weui-option>
            <weui-option value="3" label="Email"></weui-option>
          </weui-select>
          <weui-select-group>
            <template #header>
              <select class="weui-select" name="area" v-model="area">
                <option value="1">+86</option>
                <option value="2">+80</option>
                <option value="3">+84</option>
                <option value="4">+87</option>
              </select>
            </template>
            <template #body>
              <input
                class="weui-input"
                type="number"
                pattern="[0-9]*"
                placeholder="请输入号码"
                v-model="mobile"
              />
            </template>
          </weui-select-group>
          <weui-select name="country" label="国家" v-model="country">
            <weui-option value="1" label="中国"></weui-option>
            <weui-option value="2" label="美国"></weui-option>
            <weui-option value="3" label="英国"></weui-option>
          </weui-select>
        </weui-form-group>
      </weui-form-control>
      <weui-form-opr>
        <weui-button @click="save()">确定</weui-button>
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
      type: '1',
      area: '1',
      mobile: '12345678907',
      country: '1',
    }
  },
  components: { Page },
  methods: {
    save(): void {
      this.$toast.success('已完成')
    },
  },
})
</script>
<style lang="scss" scoped>
.weui-select {
  width: 3.1em;
}
/deep/ .weui-label {
  width: 3.1em;
}
</style>