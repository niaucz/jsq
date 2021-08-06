<template>
  <div class="container">
    <Bar></Bar>
    <NumberPanel></NumberPanel>
    <ButtonPanel></ButtonPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bar from "./components/Bar.vue";
import NumberPanel from "./components/NumberPanel.vue";
import ButtonPanel from "./components/ButtonPanel.vue";
export default defineComponent({
  components: {
    Bar,
    NumberPanel,
    ButtonPanel,
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 502px;
  width: 322px;
  background-color: rgb(230, 230, 230);
}
</style>