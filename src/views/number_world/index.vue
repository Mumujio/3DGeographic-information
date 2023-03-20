<template>
  <div class="number_world" ref="echart"></div>
</template>

<script setup>
import { onMounted, ref, reactive, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import "@/assets/map/world.js";
let mychart;
let echart = ref(null);
onMounted(() => {
  mychart = echarts.init(echart.value);
  mychart.setOption();
  window.addEventListener("resize", resize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
});
function resize() {
  mychart.resize();
}
</script>
<style scoped lang="less">
.number_world {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>
