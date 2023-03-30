<template>
  <loaded :progress="option.progress" @isScrollBgr="isScrollBgr"></loaded>
  <canvas ref="webgl"></canvas>
  <backGround
    :newSection="option.newSection"
    :threeInstance="option.threeInstance"
    v-if="option.isScrollBgr"
  ></backGround>
</template>

<script setup>
import antarctica from "./antarcticaTHREE/Experience";
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import loaded from "@/components/loaded.vue";
import backGround from "@/components/area_background/antarctica_bg.vue";
const webgl = ref(null);
const option = reactive({
  newSection: 0,
  // 加载进度
  progress: 0,
  isScrollBgr: false,
  threeInstance: {},
});
const isScrollBgr = (sign) => {
  option.isScrollBgr = sign;
};

const three = {};
onMounted(() => {
  // 需要在dom都渲染之后再将获取的dom传进去，不然webgl.value的canvas画布为空
  three.experience = new antarctica(webgl.value);
  option.threeInstance = three.experience;
  three.experience.resources.on("sourceOnReady", (loadProgress) => {
    option.progress = loadProgress;
  });
  three.experience.scroll.on("scroll", (newSection) => {
    option.newSection = newSection;
  });
});
onBeforeUnmount(() => {
  three.experience.destroy();
  // console.log(three.experience);
});
</script>

<style lang="less" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index: 0;
}
</style>
