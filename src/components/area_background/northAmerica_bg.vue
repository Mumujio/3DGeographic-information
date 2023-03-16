<template>
  <!-- <div id="fullpage">
    <div class="section section1">
      <h1>Section 1</h1>
    </div>
    <div class="section section2">
      <h1>Section 2</h1>
    </div>
    <div class="section section3">
      <h1>Section 3</h1>
    </div>
  </div> -->
  <div
    class="scrollBackground"
    :class="{
      section1Bgr: newSection == 0,
      section2Bgr: newSection == 1,
      section3Bgr: newSection == 2,
    }"
  >
    <section class="section">
      <h1>Terrain</h1>
    </section>
    <section class="section">
      <h2>Climate</h2>
    </section>
  </div>
  <div></div>
</template>

<script setup>
import * as THREE from "three";
import { ref, onMounted } from "vue";
// import { tag, labelRenderer } from "@/utils/threejs/label/tag2D.js";
// import fullpage from "fullpage.js";

const props = defineProps({
  newSection: 0,
  threeInstance: {},
});
// const { sizes, world, time, camera, scene } = props.threeInstance;

onMounted(() => {
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
  //         camera.instance.position.set(0, 0, 6);
  //         break;
  //       case 1:
  //         camera.instance.position.set(0, -4, 6);
  //         break;
  //       case 2:
  //         camera.instance.position.set(0, -8, 6);
  //         break;
  //     }
  //   },
  // });
});
</script>
<style lang="less" scoped>
.scrollBackground {
  background-color: rgb(200, 149, 149);
  z-index: -1;

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
  &.section4Bgr {
    background-color: rgb(90, 59, 59);
    transition: all 1.2s;
  }
}

.section {
  display: flex;
  align-items: center;
  font-size: 7vmin;
  height: 100vh;
  position: relative;

  // z-index: -1;
}
// .section {
//   position: relative;
//   height: 100vh;
//   overflow: hidden;
// }
</style>
