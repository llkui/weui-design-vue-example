<template>
  <Page type="white" :padding="false" :showFooter="false">
    <weui-form
      title="模拟选择框"
      desc="用于丰富原生选择框结构，使其更具有扩展性"
    >
      <weui-form-control>
        <weui-form-group>
          <weui-select-group
            :isPicker="true"
            :placement="'after'"
            :showHeader="false"
            @clickBody="showDate()"
          >
            <template #body>{{ date }}</template>
          </weui-select-group>
          <weui-select-group
            :label="area.label"
            :isPicker="true"
            @clickHeader="showPhone()"
          >
            <template #body>
              <input
                class="weui-input"
                type="number"
                pattern="[0-9]"
                placeholder="请输入号码"
                v-model="mobile"
              />
            </template>
          </weui-select-group>
          <weui-select-group
            label="票种"
            :isPicker="true"
            placement="after"
            @clickBody="showPicker()"
          >
            <template #body>
              {{ type.label }}
            </template>
          </weui-select-group>
        </weui-form-group>
      </weui-form-control>
    </weui-form>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue'
import Page from '@/components/Page.vue'

export default Vue.extend({
  data() {
    return {
      date: '日期',
      area: { label: '+86', value: '1' },
      mobile: '12345678907',
      type: { label: '的士票', value: '3' },
    }
  },
  components: { Page },
  methods: {
    showDate(): void {
      const config = {
        title: '日期选择器',
        start: '2000-01-01',
        end: '2026-12-12',
        default: this.date === '日期' ? '2020-12-9' : this.date,
      }
      this.$picker.showDate(config).then((res) => {
        this.date = res
      })
    },
    showPhone(): void {
      const options = [
        { label: '+86', value: '1' },
        { label: '+80', value: '2' },
        { label: '+84', value: '3' },
        { label: '+87', value: '4' },
      ]
      const defaultIndex = options.findIndex(
        (item) => item.value === this.area.value
      )
      const config = {
        title: '单列选择器',
        options: options,
        default: [defaultIndex === -1 ? 0 : defaultIndex],
      }
      this.$picker.show(config).then((res) => {
        this.area = res[0]
      })
    },
    showPicker(): void {
      const options = [
        { label: '飞机票', value: '1', disabled: false },
        { label: '火车票', value: '2', disabled: false },
        { label: '的士票', value: '3', disabled: false },
        { label: '公交票(disabled)', value: '4', disabled: true },
        { label: '其他(disabled)', value: '5', disabled: true },
        { label: '好的(disabled)', value: '6', disabled: true },
      ]
      const defaultIndex = options.findIndex(
        (item) => item.value === this.type.value
      )
      const config = {
        title: '单列选择器',
        options: options,
        default: [defaultIndex === -1 ? 0 : defaultIndex],
      }
      this.$picker.show(config).then((res) => {
        this.type = res[0]
      })
    },
  },
})
</script>
<style lang="scss" scoped>
/deep/ .weui-label {
  width: 3.1em;
}
</style>