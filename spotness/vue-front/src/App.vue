<template>
<div id="app" class="main-app">
  <app-message></app-message>
  <p>TEKST</p>
</div>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import "stylesheets/main.scss";

body {
  width: 100vw;
  height: 100vh;
  background: $brand-color;
  font-family: $main-font;
  color: $main-font-color;
  @extend .flexy;
}
</style>
