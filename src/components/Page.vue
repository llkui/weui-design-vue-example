<template>
  <div class="page js_show">
    <div class="page__hd">
      <h1 class="page__title">{{title}}</h1>
      <p class="page__desc">{{desc}}</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <slot></slot>
    </div>
    <div :class="footerFixed ? 'j_bottom' : ''" class="page__ft">
      <a href>
        <img alt src="./../assets/icon_footer_link.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: String,
    desc: String,
    footerFixed: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  opacity: 0;
  z-index: 1;
}
.page.js_show {
  opacity: 1;
}
.page {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
}
.page {
  background-color: var(--weui-BG-0);
}
.page__hd {
  padding: 40px;
}
.page__title {
  text-align: left;
  font-size: 20px;
  font-weight: 400;
}
.page__desc {
  margin-top: 4px;
  color: var(--weui-FG-1);
  text-align: left;
  font-size: 14px;
}
.page__bd_spacing {
  padding: 0 16px;
}
.page__ft {
  padding-top: 40px;
  padding-bottom: 10px;
  padding-bottom: calc(10px + constant(safe-area-inset-bottom));
  padding-bottom: calc(10px + env(safe-area-inset-bottom));
  text-align: center;
}
.page__ft img {
  height: 19px;
}
.page__ft.j_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
