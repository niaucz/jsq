<template>
  <!-- 下方按钮面板 -->
  <div class="bottom none-select">
    <div class="button-panel">
      <div class="top-btn">
        <!--  -->
        <div class="t-button">MC</div>
        <div class="t-button">MR</div>
        <div class="t-button">M+</div>
        <div class="t-button">M-</div>
        <div class="t-button">MS</div>
        <div class="t-button">M</div>
      </div>
      <div class="bottom-btn">
        <div class="b-button color-buff-240">%</div>
        <div class="b-button color-buff-240">CE</div>
        <div @click="clearMath" class="b-button color-buff-240">C</div>
        <div @click="delMath" class="b-button color-buff-240">Del</div>
        <div class="b-button color-buff-240">?</div>
        <div class="b-button color-buff-240">?</div>
        <div class="b-button color-buff-240">?</div>
        <div @click="logic('÷')" class="b-button color-buff-240 font-size-buff">÷</div>
        <div @click="addMath('7')" class="b-button color-buff-250 font-buff-bold">7</div>
        <div @click="addMath('8')" class="b-button color-buff-250 font-buff-bold">8</div>
        <div @click="addMath('9')" class="b-button color-buff-250 font-buff-bold">9</div>
        <div @click="logic('×')" class="b-button color-buff-240 font-size-buff">×</div>
        <div @click="addMath('4')" class="b-button color-buff-250 font-buff-bold">4</div>
        <div @click="addMath('5')" class="b-button color-buff-250 font-buff-bold">5</div>
        <div @click="addMath('6')" class="b-button color-buff-250 font-buff-bold">6</div>
        <div @click="logic('－')" class="b-button color-buff-240 font-size-buff">－</div>
        <div @click="addMath('1')" class="b-button color-buff-250 font-buff-bold">1</div>
        <div @click="addMath('2')" class="b-button color-buff-250 font-buff-bold">2</div>
        <div @click="addMath('3')" class="b-button color-buff-250 font-buff-bold">3</div>
        <div @click="logic('＋')" class="b-button color-buff-240 font-size-buff">＋</div>
        <div class="b-button color-buff-250">+/-</div>
        <div @click="addMath('0')" class="b-button color-buff-250 font-buff-bold">0</div>
        <div @click="addMath('.')" class="b-button color-buff-250">.</div>
        <div @click="addMath('=')" class="b-button color-buff-154-203-219 font-size-buff">=</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../../store/store";
export default defineComponent({
  setup() {
    const store = useStore();
    return {
      // 使用 mutation
      addMath: (str: string) => store.commit("addMath", str),
      clearMath: () => store.commit("clearMath"),
      delMath: () => store.commit("delMath"),
      logic: (str: string) => store.commit("logic",str),
    };
  },
});
</script>

<style lang="scss" scoped>
.bottom {
  height: 335px;
  width: 312px;
  padding: 0px 5px 5px 5px;
}
.button-panel {
  width: 100%;
  height: 100%;
  /* background-color: darkorange; */
}
.top-btn {
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  line-height: 35px;
  text-align: center;
}
.t-button {
  width: 45px;
  font-size: 12px;
  font-weight: bold;
}
.t-button:hover {
  background-color: rgb(182, 182, 182);
}
.bottom-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.b-button {
  margin-top: 3px;
  height: 47px;
  width: 75px;
  text-align: center;
  line-height: 47px;
}
// 加个Buff
.color-buff-240 {
  background-color: rgb(240, 240, 240);
}
.color-buff-240:hover {
  background-color: rgb(182, 182, 182);
}
.color-buff-240:active {
  background-color: rgb(166, 166, 166);
}

.color-buff-250 {
  background-color: rgb(250, 250, 250);
}
.color-buff-250:hover {
  background-color: rgb(182, 182, 182);
}
.color-buff-250:active {
  background-color: rgb(166, 166, 166);
}

.color-buff-154-203-219 {
  background-color: rgb(154, 203, 219);
}
.color-buff-154-203-219:hover {
  background-color: rgb(101, 187, 215);
}
.color-buff-154-203-219:active {
  background-color: rgb(41, 163, 204);
}

.font-size-buff {
  font-size: 22px;
}
.font-buff-bold {
  font-weight: bold;
}
</style>