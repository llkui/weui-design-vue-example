<template>
  <div class="container" id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
body,
html {
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  color: var(--weui-FG-0);
}
</style>
