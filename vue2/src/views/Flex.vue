<template>
  <Page title="Flex" desc="Flex布局">
    <weui-flex>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
    </weui-flex>
    <weui-flex>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
    </weui-flex>
    <weui-flex>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
    </weui-flex>
    <weui-flex>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
    </weui-flex>
    <weui-flex>
      <div class="placeholder">weui</div>
      <weui-flex-item>
        <div class="placeholder">weui</div>
      </weui-flex-item>
      <div class="placeholder">weui</div>
    </weui-flex>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page }
}
</script>
<style lang="scss" scoped>
.placeholder {
  margin: 5px;
  padding: 0 10px;
  background-color: var(--weui-BG-1);
  height: 2.3em;
  line-height: 2.3em;
  text-align: center;
  color: var(--weui-FG-1);
}
</style>