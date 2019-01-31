<template>

  <iframe :src="homeUrl" v-loading.fullscreen.lock="fullscreenLoading" id="foo" scrolling="no" frameborder="0" :width="width" :height="height"></iframe>
 <!-- <webview
      id="foo"
      v-loading.fullscreen.lock="fullscreenLoading"
      :src="homeUrl"
      nodeintegration
      plugins
      autosize="on"
      disablewebsecurity
      :width="width"
      :height="height"
    ></webview>-->
</template>

<script>
import { config } from "../../config/index";
export default {
  name: "home",
  data() {
    return {
      homeUrl: config.default_home_url,
      fullscreenLoading: false,
      width: document.body.clientWidth - 50,
      height: document.body.clientWidth - 98
    };
  },  
  mounted() {
    let self = this;
    let webview = document.getElementById("foo");
    let loadstart = function() {
      self.fullscreenLoading = true;
    };
    let loadstop = function() {
      self.fullscreenLoading = false;
    };
    webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);
  },
  destroyed() {
    this.$root.$emit("changeAppMainHeight", 88);
  },
  methods: {
    initHomeIndex() {
      let homeUrl = window.localStorage["homeUrl"];
      if (homeUrl) {
        this.homeUrl = window.localStorage["homeUrl"];
      }
    }
  }
};
</script>
