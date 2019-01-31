<template>
  <section class="app-main">
    <router-view :key="key"></router-view>
  </section>
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
