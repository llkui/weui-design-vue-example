<template>
  <div class="container" id="app">
    <router-view />
    <i @click="changeTheme()" class="anticon theme-icon" role="img">
      <svg fill="currentColor" height="21" viewBox="0 0 21 21" width="21">
        <g fill-rule="evenodd">
          <g fill-rule="nonzero">
            <path
              d="M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"
            />
          </g>
        </g>
      </svg>
    </i>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$nextTick(function () {
      const theme = localStorage.getItem('data-weui-theme')
      if (theme) {
        document.body.setAttribute('data-weui-theme', theme)
      } else {
        document.body.setAttribute('data-weui-theme', 'light')
      }
    })
  },
  methods: {
    changeTheme: function () {
      const config = {
        title: '切换主题'
      }
      const menu = [
        { text: 'Light' },
        { text: 'Dark' }
      ]

      this.$actionSheet.show(config, menu).then((res) => {
        const theme = res === 0 ? 'light' : 'dark'
        localStorage.setItem('data-weui-theme', theme)
        document.body.setAttribute('data-weui-theme', theme)
      })
    }
  }
}
</script>

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
.theme-icon {
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 9;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  padding: 7px;
  color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.weui-actionsheet__action {
  color: var(--weui-FG-0);
}
</style>
