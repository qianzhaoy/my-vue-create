<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less" scoped>
#app {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
