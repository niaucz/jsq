<template>
  <!-- 头部Bar -->
  <div class="top">
    <div class="top-bar none-select">
      <span class="top-bar-title">Calculator</span>
      <div class="top-bar-tools">
        <span class="tools">1</span>
        <span class="tools">2</span>
        <span class="tools">3</span>
      </div>
    </div>
    <div class="top-bar-menu none-select">
      <div class="top-bar-menu-btn">
        <div class="top-bar-menu-btn-item">A</div>
        <div class="top-bar-menu-btn-item">标准</div>
        <div class="top-bar-menu-btn-item">C</div>
      </div>
      <div class="top-bar-menu-btn-item">D</div>
    </div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
});
</script>

<style lang="scss"  scoped>
.top {
  height: 72px;
  width: 322px;
}
.top-bar {
  text-align: center;
  line-height: 35px;
  height: 35px;
  width: 322px;
  display: flex;
  justify-content: space-between;
}
.top-bar-title {
  font-size: 11px;
  width: 80px;
}
.top-bar-tools {
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  width: 105px;
}
.top-bar-menu {
  height: 37px;
  display: flex;
  justify-content: space-between;
}
.top-bar-menu-btn {
  display: flex;
  justify-content: space-between;
}
.top-bar-menu-btn-item {
  width: 37px;
  line-height: 37px;
  text-align: center;
}
.tools {
  width: 35px;
}
</style>