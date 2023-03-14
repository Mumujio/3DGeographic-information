<template>
  <loaded :progress="option.progress" @isScrollBgr="isScrollBgr"></loaded>
  <canvas ref="webgl"></canvas>
  <backGround
    :newSection="option.newSection"
    v-if="option.isScrollBgr"
  ></backGround>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";
import northAmerica from "./northAmericaTHREE/Experience";
import loaded from "@/components/loaded.vue";
import backGround from "@/components/area_background/northAmerica_bg.vue";
const webgl = ref(null);
const three = {};
const option = reactive({
  newSection: 0,
  // 加载进度
  progress: 0,
  isScrollBgr: false,
});

const isScrollBgr = (sign) => {
  option.isScrollBgr = sign;
};
onMounted(() => {
  // 需要在dom都渲染之后再将获取的dom传进去，不然webgl.value的canvas画布为空
  three.experience = new northAmerica(webgl.value);
  three.experience.resources.on("sourceOnReady", (loadProgress) => {
    option.progress = loadProgress;
  });
  three.experience.scroll.on("scroll", (newSection) => {
    option.newSection = newSection;
  });
});
onBeforeUnmount(() => {
  console.log("从副页离开");
  three.experience.destroy();
  // console.log(three.experience);
});
</script>

<style lang="less" scoped>
.text {
  background-color: rgb(200, 149, 149);
  &.section1Bgr {
    background-color: rgb(199, 167, 167);
    transition: all 1.2s;
  }
  &.section2Bgr {
    background-color: rgb(169, 83, 83);
    transition: all 1.2s;
  }
  &.section3Bgr {
    background-color: rgb(200, 16, 16);
    transition: all 1.2s;
  }
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
.section {
  display: flex;
  align-items: center;
  font-size: 7vmin;
  height: 100vh;
  position: relative;

  // z-index: -1;
}
</style>
