<template>
  <Page title="List" desc="列表" :padding="false">
    <weui-cell-group-title title="带说明的列表项"></weui-cell-group-title>
    <weui-cell-group>
      <weui-cell title="标题文字" value="说明文字"></weui-cell>
      <weui-cell title="标题文字" value="说明文字" is-swipe></weui-cell>
    </weui-cell-group>
    <weui-cell-group-title title="带图标、说明的列表项"></weui-cell-group-title>
    <weui-cell-group>
      <weui-cell title="标题文字" value="说明文字" :icon="icon"></weui-cell>
      <weui-cell title="标题文字" value="说明文字" :icon="icon"></weui-cell>
    </weui-cell-group>
    <weui-cell-group-title title="带跳转的列表项"></weui-cell-group-title>
    <weui-cell-group>
      <weui-cell title="cell standard" is-link></weui-cell>
      <weui-cell title="cell standard" is-link></weui-cell>
    </weui-cell-group>
    <weui-cell-group-title title="带说明、跳转的列表项"></weui-cell-group-title>
    <weui-cell-group>
      <weui-cell title="cell standard" value="说明文字" is-link></weui-cell>
      <weui-cell title="cell standard" value="说明文字" is-link></weui-cell>
    </weui-cell-group>
    <weui-cell-group-title
      title="带图标、说明、跳转的列表项"
    ></weui-cell-group-title>
    <weui-cell-group>
      <weui-cell
        title="cell standard"
        value="说明文字"
        :icon="icon"
        is-link
      ></weui-cell>
      <weui-cell
        title="cell standard"
        value="说明文字"
        :icon="icon"
        is-link
      ></weui-cell>
    </weui-cell-group>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  data () {
    return {
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='
    }
  },
  components: { Page }
}
</script>