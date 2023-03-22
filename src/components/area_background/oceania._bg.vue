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
    <section class="section section4">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section4 }"
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
  <!-- 袋鼠label -->
  <section
    ref="kangaroo_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.Kangaroo }"
    class="Kangaroo"
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
  <!-- 考拉label -->
  <section
    ref="koala_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.koala }"
    class="koala"
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

const props = defineProps({
  newSection: 0,
  threeInstance: {},
});
const { sizes, world, time, camera, scene, scroll } = props.threeInstance;

const terrain_label = ref(null);
const weather_label = ref(null);
const kangaroo_label = ref(null);
const koala_label = ref(null);
const visible = ref(false);
let ratio = ref(0);

const hideen_flag = reactive({
  section1: false,
  section2: true,
  section3: true,
  section4: true,
  terrain: false,
  weather: true,
  Kangaroo: true,
  koala: true,
});
function testClick() {
  visible.value = true;
}

onMounted(() => {
  let tLabael = tagtest(terrain_label.value);
  let wLabel = tagtest(weather_label.value);
  let k1Label = tagtest(kangaroo_label.value);
  let k2Label = tagtest(koala_label.value);
  scene.children[1].add(wLabel);
  scene.children[2].children[0].add(tLabael);

  scene.children[3].add(k1Label);
  scene.children[4].add(k2Label);

  const tLabelRenderer = labelRenderer(document.querySelector(".section1"));
  const wLabelRenderer = labelRenderer(document.querySelector(".section2"));
  const k1tLabelRenderer = labelRenderer(document.querySelector(".section3"));
  const k2tLabelRenderer = labelRenderer(document.querySelector(".section4"));

  time.on("tick", () => {
    // 计算文字optic值
    ratio.value = scroll.scrollContent.scrollY / sizes.height;

    // 判断使用哪个sections的渲染器
    if (props.newSection == 0) {
      tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 1) {
      wLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 2) {
      k1tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 3) {
      k2tLabelRenderer.render(scene, camera.instance);
    }
  });
  sizes.on("resize", () => {
    if (props.newSection == 0) {
      tLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section1").scrollHeight
      );
    } else if (props.newSection == 1) {
      wLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section2").scrollHeight
      );
    } else if (props.newSection == 2) {
      k1tLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section3").scrollHeight
      );
    } else if (props.newSection == 2) {
      k2tLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section4").scrollHeight
      );
    }
  });
});

watch(ratio, (newValue, oldValue) => {
  console.log(newValue);
  // 文本
  if (newValue < 0.3) {
    hideen_flag.section1 = false;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
    hideen_flag.section4 = true;
  } else if (newValue >= 0.3 && newValue < 0.65) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
    hideen_flag.section4 = true;
  } else if (newValue >= 0.65 && newValue < 1.25) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = false;
    hideen_flag.section3 = true;
    hideen_flag.section4 = true;
  } else if (newValue >= 1.25 && newValue < 1.5) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
    hideen_flag.section4 = true;
  } else if (newValue >= 1.5 && newValue < 2.3) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = false;
    hideen_flag.section4 = true;
  } else if (newValue >= 2.3 && newValue < 2.5) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
    hideen_flag.section4 = true;
  } else {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
    hideen_flag.section4 = false;
  }

  // label
  if (newValue < 0.08) {
    hideen_flag.terrain = false;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else if (newValue >= 0.08 && newValue < 1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else if (newValue >= 1 && newValue < 1.06) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else if (newValue >= 1.06 && newValue < 1.8) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else if (newValue >= 1.8 && newValue < 2.1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = false;
    hideen_flag.koala = true;
  } else if (newValue >= 2.1 && newValue < 2.9) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = false;
  }
});
</script>
<style scoped lang="less">
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
    background-image: url("@/views/scene_Oceania/img/photo1.jpg");
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
    background-image: url("@/views/scene_Oceania/img/photo2.jpg");
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
    background-image: url("@/views/scene_Oceania/img/photo3.jpg");
  }
}

.section4 {
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("@/views/scene_Oceania/img/photo4.jpg");
  }
}
.section_hidden {
  opacity: 0;
}
.section-Aleft,
.terrain,
.koala,
.Kangaroo,
.weather {
  transition: all 0.8s;
}
</style>
