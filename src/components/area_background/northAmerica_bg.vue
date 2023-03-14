<template>
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
    <section class="section">
      <h2>echarts</h2>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  newSection: 0,
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
</style>
