<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>北美洲地形</h2>
        <h2>European terrain</h2>
        <p>
          北美洲主体位于西半球、北半球，北美大陆北临北冰洋、东临大西洋、西临太平洋、南临大西洋的边缘海墨西哥湾，几乎被三大洋所包围，仅通过中美地峡与南美洲相连。北美洲的地形明显分为三个南北纵列带，西部是高大的山系，中部为广阔的平原，东部为低缓的山地和高原。北美洲和南美洲共同组成了美洲板块，在板块运动中，美洲板块的西部分别于太平洋板块和南极洲板块碰撞挤压。
        </p>
      </div>
      <div class="cover"></div>
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
        <h2>北美洲气候</h2>
        <p>
          北美洲的气候特征是气候类型复杂多样，温带大陆性气候分布十分广泛。
          因此北美洲西侧以大约北纬40°为界，以南地区分布为“地中海气候”，以北分布为“温带海洋性气候”，盛行西风带受到山脉的抬升明显，所以北美洲的温度海洋性气候降水量十分丰富，这两种气候类型的分布都呈条带状。
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
// import fullpage from "fullpage.js";
import { PlusCircleOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  newSection: 0,
  threeInstance: {},
});
const { sizes, world, time, camera, scene, scroll } = props.threeInstance;
const terrain_label = ref(null);
const weather_label = ref(null);
const hideen_flag = reactive({
  section1: false,
  section2: true,
  terrain: false,
  weather: true,
});
let ratio = ref(0);
const visible = ref(false);
function testClick() {
  visible.value = true;
}
onMounted(() => {
  let tLabael = tagtest(terrain_label.value);
  let wLabel = tagtest(weather_label.value);
  scene.children[1].add(wLabel);
  scene.children[2].add(tLabael);
  const tLabelRenderer = labelRenderer(document.querySelector(".section1"));
  const wtLabelRenderer = labelRenderer(document.querySelector(".section2"));
  time.on("tick", () => {
    // 计算文字optic值
    ratio.value = scroll.scrollContent.scrollY / sizes.height;

    // 判断使用哪个sections的渲染器
    if (props.newSection == 0) {
      tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 1) {
      wtLabelRenderer.render(scene, camera.instance);
    }
  });
  sizes.on("resize", () => {
    // 判断使用哪个sections的渲染器
    if (props.newSection == 0) {
      tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 1) {
      wtLabelRenderer.render(scene, camera.instance);
    }
  });
});

watch(ratio, (newValue, oldValue) => {
  console.log(newValue);
  // 文本
  if (newValue < 0.3) {
    hideen_flag.section1 = false;
    hideen_flag.section2 = true;
  } else if (newValue >= 0.3 && newValue < 0.65) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
  } else if (newValue >= 0.65 && newValue < 1.43) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = false;
  } else if (newValue >= 1.58) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
  }

  // label
  if (newValue < 0.1) {
    hideen_flag.terrain = false;
    hideen_flag.weather = true;
  } else if (newValue >= 0.1 && newValue < 0.9) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
  } else {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
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
  // background-image: url("@/views/scene_SouthAmerica/img/photo1.jpg");

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url("@/views/scene_NorthAmerica/img/photo1.jpg");
    // background-size: 100% 100%;
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
    background-image: url("@/views/scene_NorthAmerica/img/photo1.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.section_hidden {
  opacity: 0;
}
.section-Aleft,
.terrain,
.weather {
  transition: all 0.8s;
}
</style>
