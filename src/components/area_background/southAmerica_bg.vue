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
  <div class="scrollBackground">
    <section class="section section1">
      <div class="section-Aleft">
        <h2>南美洲地形</h2>
        <h2>South America</h2>
        <p>
          南美洲的地形特征可以分为东西两部分，西部安第斯山脉贯穿南北,而东部呈平原高原间隔分布特征。南美洲的西侧，地处美洲板块和南极洲板块(又称小板块)之间的消亡边界，板块之间相互碰撞挤压，从而形成了巨大的海岸山脉,在南美洲西侧靠近太平洋沿海形成了巨大的安第斯山脉。
        </p>
      </div>
      <div class="cover"></div>
      <!-- <div class="event-view">
        <a-space><PlusCircleOutlined /></a-space>fwefewfefwe
      </div> -->
      <img
        src="@/assets/img/logo.png"
        alt=""
        style="position: absolute; top: 0; right: 0"
      />
    </section>
    <section class="section section2">
      <div class="section-Aleft">
        <h2>南美洲气候</h2>
        <p>
          南美洲的气候特点是温暖湿润，以热带为主，大陆性不显著南美洲气候特征是在大陆位置、形状、地形、洋流,大气环流等地带性因素和非地带性因素共同作用下形成的。
          1、位置和大陆形状南美洲位于北纬12和南纬56之间,南北延伸约68纬度,但大陆北宽南窄,略呈三角形。
        </p>
      </div>
      <img
        src="@/assets/img/logo.png"
        alt=""
        style="position: absolute; top: 0; right: 0"
      />
    </section>
    <section class="section section3">
      <div class="section-Aleft">
        <h2>凯门鳄</h2>
        <p>
          南美洲位于美洲南部，南美洲动植物种类繁多，南美洲的野生栖息地拥有地球生物多样性的很大一部分，其中南美洲的十大珍稀动物,如凯门鳄;
          凯门鳄是短吻鳄科凯门鳄属动物的统称，属于中小型鳄鱼，它们和短吻鳄有亲缘关系，是像蜥蜴一样的两栖肉食动物;
        </p>
      </div>
      <img
        src="@/assets/img/logo.png"
        alt=""
        style="position: absolute; top: 0; right: 0"
      />
    </section>
  </div>
</template>

<script setup>
import * as THREE from "three";
import { ref, onMounted } from "vue";
import { tag, labelRenderer } from "@/utils/threejs/label/tag2D.js";
// import fullpage from "fullpage.js";
import { PlusCircleOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  newSection: 0,
  threeInstance: {},
});
const { sizes, world, time, camera, scene } = props.threeInstance;

onMounted(() => {
  let tagLbael = tag("个股为各位");
  scene.children[2].children[0].add(tagLbael);
  let labelRenderer1 = labelRenderer(document.querySelector(".section1"));
  time.on("tick", () => {
    labelRenderer1.render(scene, camera.instance);
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
  // z-index: -1;
  position: relative;
}
.section {
  // display: flex;
  // align-items: center;
  // font-size: 7vmin;
  height: 100vh;
  position: relative;

  &-Aleft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 71px;
    max-width: 543px;
    h2 {
      color: rgba(0, 0, 0, 1);
      font-size: 72px;
      font-weight: 700;
    }
    p {
      font-size: 36px;
      color: rgba(0, 0, 0, 1);

      font-weight: 400;
    }
  }
}
.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background-image: url("@/views/scene_SouthAmerica/img/photo1.jpg");
}
.section1 {
  // background-image: url("@/views/scene_SouthAmerica/img/photo1.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;

  // .event-view {
  //   width: 40px;
  //   height: 40px;
  //   position: absolute;
  //   left: 50%;
  //   top: 40%;
  //   z-index: 3;
  // }
}

.section2 {
  background-image: url("@/views/scene_SouthAmerica/img/photo2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.section3 {
  background-image: url("@/views/scene_SouthAmerica/img/photo3.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
// .section {
//   position: relative;
//   height: 100vh;
//   overflow: hidden;
// }
</style>
