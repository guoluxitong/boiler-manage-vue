<template>
  <ul class="submenu" :style="{position: relative,left:'135px',top:'0px'}">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "submenu",
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      row: {}
    };
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeTableMenu);
      } else {
        document.body.removeEventListener("click", this.closeTableMenu);
      }
    }
  },
  methods: {
    openTableMenu(row, event, x, y) {
      window.event.returnValue = false;
      this.visible = true;
      this.row = row;
      this.left = x;
      this.top = y;
      this.$root.$emit("table-row", row);
      return false;
    },
    closeTableMenu() {
      this.visible = false;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.submenu {
  margin: 0;
  background: #fff;
  z-index: 100;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>

