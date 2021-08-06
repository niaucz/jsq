<template>
  <!-- 计算数字面板 -->
  <div class="number-panel">
    <!-- 上面计算空间 -->
    <div class="number-panel-top none-select">{{state.numberLogic}}</div>
    <!-- 下方数字空间 -->
    <div class="number-panel-bottom">{{ state.number }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../../store/store";
export default defineComponent({
  setup() {
    const store = useStore();
    return {
      state: store.state,
    };
  },
});
</script>

<style lang="scss"  scoped>
.number-panel {
  height: 90px;
  width: 307px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.number-panel-top {
  text-align: right;
  font-size: 13px;
  height: 30px;
  width: 295px;
  line-height: 30px;
  color: rgb(92, 92, 92);
}
.number-panel-bottom {
  text-align: right;
  height: 60px;
  width: 295px;
  font-weight: bold;
  font-size: 45px;
  line-height: 60px;
  letter-spacing: -2px;
}
</style>