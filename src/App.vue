<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'boiler-manage-vue',
  created () {
    document.oncontextmenu = function(){
      return false;
    }
  }
}
</script>
