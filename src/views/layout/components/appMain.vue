<template>
  <div class="app-main">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key() {
                return this.$route.fullPath
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
.app-main{
  width: 99.4%;
  margin: auto;
}
</style>
