<template>
  <loaded :progress="option.progress" @isScrollBgr="isScrollBgr"></loaded>
  <canvas ref="webgl"></canvas>
  <backGround
    :newSection="option.newSection"
    :threeInstance="option.threeInstance"
    v-if="option.isScrollBgr"
  ></backGround>
  <!-- <div id="fullpage">
    <div
      class="section section1"
      :class="{ 'active-section': option.newSection === 0 }"
    >
      <h1>Section 1</h1>
    </div>
    <div
      class="section section2"
      :class="{ 'active-section': option.newSection === 1 }"
    >
      <h1>Section 2</h1>
    </div>
    <div
      class="section section3"
      :class="{ 'active-section': option.newSection === 2 }"
    >
      <h1>Section 3</h1>
    </div>
  </div> -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";
import northAmerica from "./northAmericaTHREE/Experience";
import loaded from "@/components/loaded.vue";
import backGround from "@/components/area_background/northAmerica_bg.vue";
import { tag, labelRenderer } from "@/utils/threejs/label/tag2D.js";

import fullpage from "fullpage.js";

const webgl = ref(null);
const three = {};
const option = reactive({
  newSection: 0,
  // 加载进度
  progress: 0,
  isScrollBgr: false,
  sizes: {},
  threeInstance: {},
});

const isScrollBgr = (sign) => {
  option.isScrollBgr = sign;
};

onMounted(() => {
  // 需要在dom都渲染之后再将获取的dom传进去，不然webgl.value的canvas画布为空
  three.experience = new northAmerica(webgl.value);
  // option.sizes = three.experience.sizes;
  option.threeInstance = three.experience;
  three.experience.resources.on("sourceOnReady", (loadProgress) => {
    option.progress = loadProgress;
  });
  three.experience.scroll.on("scroll", (newSection) => {
    option.newSection = newSection;
  });

  // const fullPageInstance = new fullpage("#fullpage", {
  //   scrollOverflow: true,
  //   onLeave: (origin, destination, direction) => {
  //     // 隐藏离开的部分
  //     // $(origin.item).css("display", "none");
  //     // origin.item.style.display = "none";
  //   },
  //   afterLoad: function (origin, destination, direction) {
  //     // 显示进入的部分
  //     // $(destination.item).css("display", "block");

  //     // destination.item.style.display = "block";
  //     switch (destination.index) {
  //       case 0:
  //         three.experience.camera.instance.position.set(0, 0, 6);
  //         break;
  //       case 1:
  //         three.experience.camera.instance.position.set(0, -4, 6);
  //         break;
  //       case 2:
  //         three.experience.camera.instance.position.set(0, -8, 6);
  //         break;
  //     }
  //     console.log(three.experience.camera.instance.position);
  //   },
  // });
  // // 隐藏所有的section
  // const sections = document.querySelectorAll(".section");

  // // 只显示当前的section
  // sections[0].style.display = "block";
});
onBeforeUnmount(() => {
  console.log("从副页离开");
  three.experience.destroy();
  // console.log(three.experience);
});
</script>

<style lang="less" scoped>
.section1 {
  background-color: #948383;
  // transition: all 0.5s;
}
.section2 {
  background-color: #d4c6c6;
  transition: all 0.5s;
}
.section3 {
  background-color: #e95656;
  transition: all 0.5s;
}
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
// .section {
//   display: flex;
//   align-items: center;
//   font-size: 7vmin;
//   height: 100vh;
//   position: relative;

//   // z-index: -1;
// }
.section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
