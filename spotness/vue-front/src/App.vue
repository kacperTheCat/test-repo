<template>
<div id="app" class="main-app">
  <app-message></app-message>

</div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
$brand-color: #e8eaf6;
$main-font: 'Roboto Condensed', sans-serif;
$main-font-color: #333;
.reset {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.flexy {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.flexy-row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

body {
  width: 100vw;
  height: 100vh;
  background: $brand-color;
  font-family: $main-font;
  color: $main-font-color;
  @extend .flexy;
}
</style>
