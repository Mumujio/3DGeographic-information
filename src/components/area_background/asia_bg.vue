<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>亚洲地形</h2>
        <h2>South America</h2>
        <p>
          亚洲地形复杂多样，主要以高原、山地为主，亚洲的地势特点是中部高、四周低，亚洲是世界上除南极洲以外平均海拔最高的大洲；亚洲地面起伏大，高低悬殊。
          亚洲的地势很高、地表起伏极大，中间高、周围低，隆起与凹陷相间，东部有一列纵长的岛弧。亚洲既有世界上最高的高原（青藏高原）、山脉（喜马拉雅山脉）和山峰（珠穆朗玛峰）；又有世界上著名的平原（西西伯利亚平原）和最地的洼地（死海）。
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
        <h2>亚洲气候</h2>
        <!-- <p>
          气候类型复杂多样。世界上的气候类型中，除了温带海洋性气候、热带草原气候外，其他气候类型在亚洲都有分布。亚洲气候复杂多样，与亚跨纬度广有关。热带、温带和寒带都有，形成了热带、温带和寒带气候。
          季风气候显著。亚洲东部、东南部和南部沿海、近海地区形成了典型的季风气候。
          温带大陆性气候分布广泛。亚洲内陆地区，距离海洋遥远，加之山地阻挡，海洋水汽难以到达，空气干燥，形成典型的温带大陆性气候。
        </p> -->
        <img src="@/assets/img/legend/asia.png" alt="" />
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
        <h2>熊猫</h2>
        <p>
          1、体型肥硕似熊，但头圆尾短，头部和身体毛色黑白相间分明。
          2、分布范围：只限于我国长江上游向青藏高原过渡的高山深谷地带，包括秦岭，岷山、邛崃山、大小相岭和大小凉山等山系。它们活动的区域多在坳沟、山腹洼地、河谷阶地等，一般在20°以下的缓坡地形。
          3、大熊猫的食谱非常特殊，几乎包括了在高山地区可以找到的各种竹子，大熊猫也偶尔食肉。大熊猫独特的食物特性使它被当地人称作"竹熊"。
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
        <h2>银杏</h2>
        <p>
          银杏（学名：Ginkgo biloba
          L.）是银杏科、银杏属植物。乔木，高达40米，胸径可达4米；幼树树皮浅纵裂，大树之皮呈灰褐色，深纵裂，粗糙；幼年及壮年树冠圆锥形，老则广卵形。叶扇形，有长柄，淡绿色，无毛，有多数叉状并列细脉，顶端宽5-8厘米，在短枝上常具波状缺刻，在长枝上常2裂，基部宽楔形。球花雌雄异株，单性，生于短枝顶端的鳞片状叶的腋内，呈簇生状；雄球花葇荑花序状，下垂。种子具长梗，下垂，常为椭圆形、长倒卵形、卵圆形或近圆球形状。
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
  <!-- 熊猫label -->
  <section
    ref="panda_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.panda }"
    class="panda"
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
  <!-- 银杏叶label -->
  <section
    ref="ginkgo_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.ginkgo }"
    class="ginkgo"
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
const panda_label = ref(null);
const ginkgo_label = ref(null);
const visible = ref(false);
let ratio = ref(0);

const hideen_flag = reactive({
  section1: false,
  section2: true,
  section3: true,
  section4: true,
  terrain: false,
  weather: true,
  ginkgo: true,
  panda: true,
});
function testClick() {
  visible.value = true;
}

onMounted(() => {
  let tLabael = tagtest(terrain_label.value);
  let wLabel = tagtest(weather_label.value);
  let pLabel = tagtest(panda_label.value);
  let gLabel = tagtest(ginkgo_label.value);
  scene.children[1].add(wLabel);
  scene.children[2].add(gLabel);

  scene.children[3].add(pLabel);
  scene.children[4].children[0].add(tLabael);

  const tLabelRenderer = labelRenderer(document.querySelector(".section1"));
  const wLabelRenderer = labelRenderer(document.querySelector(".section2"));
  const ptLabelRenderer = labelRenderer(document.querySelector(".section3"));
  const gtLabelRenderer = labelRenderer(document.querySelector(".section4"));

  time.on("tick", () => {
    // 计算文字optic值
    ratio.value = scroll.scrollContent.scrollY / sizes.height;

    // 判断使用哪个sections的渲染器
    if (props.newSection == 0) {
      tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 1) {
      wLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 2) {
      ptLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 3) {
      gtLabelRenderer.render(scene, camera.instance);
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
      ptLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section3").scrollHeight
      );
    } else if (props.newSection == 2) {
      gtLabelRenderer.setSize(
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
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 0.08 && newValue < 1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 1 && newValue < 1.06) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 1.06 && newValue < 1.8) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 1.8 && newValue < 2.1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.panda = false;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 2.1 && newValue < 2.9) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = false;
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
    background-image: url("@/views/scene_Asia/img/photo1.jpg");
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
    background-image: url("@/views/scene_Asia/img/photo2.jpg");
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
    background-image: url("@/views/scene_Asia/img/photo3.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.section4 {
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url("@/views/scene_Asia/img/photo4.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.section_hidden {
  opacity: 0;
}
.section-Aleft,
.terrain,
.panda,
.ginkgo,
.weather {
  transition: all 0.8s;
}
</style>
