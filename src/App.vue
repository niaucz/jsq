<template>
  <Home></Home>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./pages/home/Home.vue";
export default defineComponent({
  components: {
    Home,
  },
});
</script>


<style lang="scss">
@import url("./assets/css/reset-css.scss");
body {
  background-color: rgb(0, 0, 0);
}
#app {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.none-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
