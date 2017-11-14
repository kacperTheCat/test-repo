<template >
  <div>
    <input class="custom-input custom-input--login" placeholder="  login" maxlength
="20" type="text" v-model="message" name="login">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
</script>
<style lang="scss" media="screen">
.custom-input{
  &--login{}
}
</style>
