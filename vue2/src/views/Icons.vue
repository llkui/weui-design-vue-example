<template>
  <Page title="Icons" desc="图标">
    <div class="icon-box">
      <weui-icon></weui-icon>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">成功</h3>
        <p class="icon-box__desc">用于表示操作顺利达成</p>
      </div>
    </div>
    <div class="icon-box">
      <weui-icon type="info"></weui-icon>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">提示</h3>
        <p class="icon-box__desc">
          用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息
        </p>
      </div>
    </div>
    <div class="icon-box">
      <weui-icon type="warn-primary"></weui-icon>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">普通警告</h3>
        <p class="icon-box__desc">用于表示操作后将引起一定后果的情况</p>
      </div>
    </div>
    <div class="icon-box">
      <weui-icon type="warn"></weui-icon>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">强烈警告</h3>
        <p class="icon-box__desc">
          用于表示操作后将引起严重的不可挽回的后果的情况
        </p>
      </div>
    </div>
    <div class="icon-box">
      <weui-icon type="waiting"></weui-icon>
      <div class="icon-box__ctn">
        <h3 class="icon-box__title">等待</h3>
        <p class="icon-box__desc">用于表示等待</p>
      </div>
    </div>
  </Page>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  components: { Page }
}
</script>
<style lang="scss" scoped>
/deep/ .page__bd {
  padding: 0 40px !important;
  text-align: left;
}
.icon-box {
  margin-bottom: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
/deep/ i {
  margin-right: 18px;
}
.icon-box__ctn {
  -webkit-flex-shrink: 100;
  flex-shrink: 100;
}
.icon-box__title {
  font-weight: 400;
}
.icon-box__desc {
  margin-top: 6px;
  font-size: 12px;
  color: #888;
}
</style>