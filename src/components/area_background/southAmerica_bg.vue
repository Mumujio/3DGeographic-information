<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
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
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section2 }"
      >
        <h2>南美洲气候</h2>
        <p>
          南美洲的气候特点是温暖湿润，以热带为主，大陆性不显著南美洲气候特征是在大陆位置、形状、地形、洋流,大气环流等地带性因素和非地带性因素共同作用下形成的。
          1、位置和大陆形状南美洲位于北纬12和南纬56之间,南北延伸约68纬度,但大陆北宽南窄,略呈三角形。
        </p>
      </div>
      <div class="cover"></div>
      <img
        src="@/assets/img/logo.png"
        alt=""
        style="position: absolute; top: 0; right: 0"
      />
    </section>
    <section class="section section3">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section3 }"
      >
        <h2>凯门鳄</h2>
        <p>
          南美洲位于美洲南部，南美洲动植物种类繁多，南美洲的野生栖息地拥有地球生物多样性的很大一部分，其中南美洲的十大珍稀动物,如凯门鳄;
          凯门鳄是短吻鳄科凯门鳄属动物的统称，属于中小型鳄鱼，它们和短吻鳄有亲缘关系，是像蜥蜴一样的两栖肉食动物;
        </p>
      </div>
      <div class="cover"></div>
      <img
        src="@/assets/img/logo.png"
        alt=""
        style="position: absolute; top: 0; right: 0"
      />
    </section>
  </div>
  <!-- 地形label -->
  <section
    ref="terrain_label"
    style="height: 200px; width: 200px; position: relative"
    class="terrain"
    :class="{ section_hidden: hideen_flag.terrain }"
  >
    <div style="position: absolute">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="testClick"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>

    <div style="position: absolute; left: 80px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="testClick"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
  </section>

  <!-- 天气label -->
  <section
    ref="weather_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.weather }"
    class="weather"
  >
    <div style="position: absolute">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="testClick"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>

    <div style="position: absolute; left: 80px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="testClick"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
  </section>
  <!-- 鳄鱼label -->
  <section
    ref="alligator_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.alligator }"
    class="alligator"
  >
    <div style="position: absolute">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="testClick"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>

    <div style="position: absolute; left: 80px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="testClick"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
  </section>

  <!-- 弹窗 -->
  <a-modal v-model:visible="visible" title="Basic Modal" @ok="visible = false">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import { tag, labelRenderer, tagtest } from "@/utils/threejs/label/tag2D.js";
import { PlusCircleOutlined } from "@ant-design/icons-vue";
// import fullpage from "fullpage.js";

const props = defineProps({
  newSection: 0,
  threeInstance: {},
});
const { sizes, world, time, camera, scene, scroll } = props.threeInstance;

const terrain_label = ref(null);
const weather_label = ref(null);
const alligator_label = ref(null);
const visible = ref(false);
let ratio = ref(0);

const hideen_flag = reactive({
  section1: false,
  section2: true,
  section3: true,
  terrain: false,
  weather: true,
  alligator: true,
});
function testClick() {
  visible.value = true;
}

onMounted(() => {
  let tLabael = tagtest(terrain_label.value);
  let wLabel = tagtest(weather_label.value);
  let aLabel = tagtest(alligator_label.value);
  scene.children[2].children[0].add(tLabael);
  scene.children[1].add(wLabel);
  scene.children[3].add(aLabel);

  const tLabelRenderer = labelRenderer(document.querySelector(".section1"));
  const wtLabelRenderer = labelRenderer(document.querySelector(".section2"));
  const atLabelRenderer = labelRenderer(document.querySelector(".section3"));

  time.on("tick", () => {
    // 计算文字optic值
    ratio.value = scroll.scrollContent.scrollY / sizes.height;

    // 判断使用哪个sections的渲染器
    if (props.newSection == 0) {
      tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 1) {
      wtLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 2) {
      atLabelRenderer.render(scene, camera.instance);
    }
  });
  sizes.on("resize", () => {
    if (props.newSection == 0) {
      tLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section1").scrollHeight
      );
    } else if (props.newSection == 1) {
      wtLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section2").scrollHeight
      );
    } else if (props.newSection == 2) {
      atLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section3").scrollHeight
      );
    }
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
watch(ratio, (newValue, oldValue) => {
  console.log(newValue);
  // 文本
  if (newValue < 0.3) {
    hideen_flag.section1 = false;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
  } else if (newValue >= 0.3 && newValue < 0.65) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
  } else if (newValue >= 0.65 && newValue < 1.43) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = false;
    hideen_flag.section3 = true;
  } else if (newValue >= 1.58) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = false;
  }

  // label
  if (newValue < 0.1) {
    hideen_flag.terrain = false;
    hideen_flag.weather = true;
    hideen_flag.alligator = true;
  } else if (newValue >= 0.1 && newValue < 1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.alligator = true;
  } else if (newValue >= 1 && newValue < 1.06) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.alligator = true;
  } else if (newValue >= 1.06 && newValue < 1.8) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.alligator = true;
  } else {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.alligator = false;
  }
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

.section1 {
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url("@/views/scene_SouthAmerica/img/photo1.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.section2 {
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url("@/views/scene_SouthAmerica/img/photo2.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.section3 {
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("@/views/scene_SouthAmerica/img/photo3.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.section_hidden {
  opacity: 0;
}
.section-Aleft,
.terrain,
.alligator,
.weather {
  transition: all 0.8s;
}
</style>
