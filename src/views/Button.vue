<template>
  <Page desc="按钮" title="Button" :padding="false">
    <div class="button-sp-area">
      <weui-button>页面主操作</weui-button>
      <weui-button :loading="true">页面主操作</weui-button>
      <weui-button :disabled="true">页面主操作</weui-button>
      <weui-button type="default">页面次要操作</weui-button>
      <weui-button :loading="true" type="default">页面次操作</weui-button>
      <weui-button :disabled="true" type="default">页面次要操作</weui-button>
      <weui-button type="warn">警告类操作</weui-button>
      <weui-button :loading="true" type="warn">警告类操作</weui-button>
      <weui-button :disabled="true" type="warn">警告类操作</weui-button>
    </div>
    <div class="button-sp-area cell">
      <weui-button block type="default">普通行按钮</weui-button>
      <weui-button block>强调行按钮</weui-button>
      <weui-button :icon="icon" block>强调行按钮</weui-button>
      <weui-button block type="warn">警告行按钮</weui-button>
    </div>
    <div class="button-sp-area">
      <weui-button :mini="true">按钮</weui-button>
      <weui-button :mini="true" type="default">按钮</weui-button>
      <weui-button :mini="true" type="warn">按钮</weui-button>
    </div>
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
  components: {
    Page
  }
}

</script>
<style lang="scss">
.button-sp-area {
  margin: 15px auto;
  padding: 15px;
  text-align: center;
}
.button-sp-area.cell {
  padding: 15px 0;
}
</style>