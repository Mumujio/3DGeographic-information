<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>非洲地形</h2>
        <h2>South America</h2>
        <p>
          非洲地形以高原为主，地面起伏不大，被称为“高原大陆”。平均海拔600米以上，地势由东南向西北倾斜。北部为撒哈拉沙漠，东部由北向南依次是埃塞俄比亚高原、东非高原、南非高原，中部赤道附近西部刚果盆地。非洲大部分地区位于南北回归线之间，全年高温地区的面积广大，有“热带大陆”之称。境内降水较少，仅刚果盆地和几内亚湾沿岸一带年平均降水量在1500
          毫米以上，年平均降水量在500 毫米以下的地区占全洲面积50
          %。刚果盆地和几内亚湾沿岸一带属热带雨林气候。
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
        <h2>非洲气候</h2>
        <p>
          非洲的气候特点：气温高，干燥地区广，气候带呈明显对称分布，有“热带大陆”之称
          非洲气候类型的形成原因无非是：纬度因素、海陆因素、地形因素、洋流因素等共同作用的结果。非洲的气候类型呈明显的带状分布，而且南北大致对称。北非以热带沙漠气候为主，年降水量多在200毫米以下；撒哈拉以南的非洲以热带草原和热带雨林气候为主，大部分地区的降水量在1
          000毫米以上。
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
        <h2>非洲狮</h2>
        <p>
          非洲狮（学名：Panthera
          leo，别称：万兽之王、草原之王），猫科豹属动物，是现存最大的猫科动物之一，被列入《世界自然保护联盟濒危物种红色名录》。
          非洲狮主要分布于非洲草原，颜色以浅黄棕色为多。雄性长有很长的鬃毛，一直延伸到肩部和胸部。雌狮体重大致相当于雄狮的一半。四肢非常的强壮，它们的爪子也很宽。
          主要生活于草原和开阔的丛林地区或半沙漠地带。
          好合群，没有固定的巢穴，过着流浪式的生活。
          雌雄狮子之间，外形差别很大，雄狮的颈部和肩部都披着长长的鬃毛，十分威武，雌狮却是不长鬃毛，个头比雄狮小些。
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
    <!-- 撒哈拉沙漠 -->
    <div style="position: absolute; top: -150px; left: 200px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
    <!-- 埃塞俄比亚高原 -->
    <div style="position: absolute; left: 540px; top: -50px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
    <!-- 刚果盆地 -->
    <div style="position: absolute; left: 350px; top: 60px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="click_label('t-3')"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
    <!-- 南非高原 -->
    <div style="position: absolute; left: 380px; top: 300px">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="click_label('t-4')"
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
    <a-popover title="图表" placement="left">
      <template #content>
        <p>各种气候的图例及数据</p>
      </template>
      <div style="position: absolute; top: 150px; left: -20px">
        <a-space
          style="background-color: #fff; cursor: pointer; font-size: 40px"
          @click="click_label"
          ><PlusCircleOutlined></PlusCircleOutlined
        ></a-space>
      </div>
    </a-popover>
  </section>
  <!-- 狮子label -->
  <section
    ref="lion_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.lion }"
    class="lion"
  >
    <div style="position: absolute">
      <a-space
        style="background-color: #fff; cursor: pointer; font-size: 40px"
        @click="click_label"
        ><PlusCircleOutlined></PlusCircleOutlined
      ></a-space>
    </div>
  </section>

  <!-- 弹窗 -->
  <label_Amodel
    v-model:visible="visible"
    v-model:modal_data="modal_data"
  ></label_Amodel>
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
const lion_label = ref(null);
const visible = ref(false);
const modal_data = reactive({
  img: "",
  name: "",
  text: "",
});
let ratio = ref(0);

const hideen_flag = reactive({
  section1: false,
  section2: true,
  section3: true,
  terrain: false,
  weather: true,
  lion: true,
});
function click_label(flag) {
  // 区分点击来源
  if (flag == "t-1") {
    // 撒哈拉沙漠
    modal_data.img = "./static/img/africa/t-1.jpg";
    modal_data.name = "撒哈拉沙漠";
    modal_data.text = "这是撒哈拉沙漠";
  } else if (flag == "t-2") {
    // 埃塞俄比亚高原
    modal_data.img = "./static/img/logo.png";
    modal_data.name = "埃塞俄比亚高原";
    modal_data.text = "这是埃塞俄比亚高原";
  } else if (flag == "t-3") {
    // 刚果盆地
    modal_data.img = "./static/img/logo.png";
    modal_data.name = "刚果盆地";
    modal_data.text = "这是刚果盆地";
  } else if (flag == "t-4") {
    // 南非高原
    modal_data.img = "./static/img/logo.png";
    modal_data.name = "南非高原";
    modal_data.text = "这是南非高原";
  }

  visible.value = true;
}

onMounted(() => {
  let tLabael = tagtest(terrain_label.value);
  let wLabel = tagtest(weather_label.value);
  let lLabel = tagtest(lion_label.value);
  scene.children[3].add(wLabel);
  scene.children[1].add(tLabael);
  scene.children[4].add(lLabel);

  const tLabelRenderer = labelRenderer(document.querySelector(".section1"));
  const wtLabelRenderer = labelRenderer(document.querySelector(".section2"));
  const lLabelRenderer = labelRenderer(document.querySelector(".section3"));

  time.on("tick", () => {
    // 计算文字optic值
    ratio.value = scroll.scrollContent.scrollY / sizes.height;

    // 判断使用哪个sections的渲染器
    if (props.newSection == 0) {
      tLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 1) {
      wtLabelRenderer.render(scene, camera.instance);
    } else if (props.newSection == 2) {
      lLabelRenderer.render(scene, camera.instance);
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
      lLabelRenderer.setSize(
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
    hideen_flag.lion = true;
  } else if (newValue >= 0.1 && newValue < 1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.lion = true;
  } else if (newValue >= 1 && newValue < 1.06) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.lion = true;
  } else if (newValue >= 1.06 && newValue < 1.8) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.lion = true;
  } else {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.lion = false;
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
    background-image: url("@/views/scene_Africa/img/photo1.jpg");
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
    background-image: url("@/views/scene_Africa/img/photo2.jpg");
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
    background-image: url("@/views/scene_Africa/img/photo3.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

.section_hidden {
  opacity: 0;
}
.section-Aleft,
.terrain,
.lion,
.weather {
  transition: all 0.8s;
}
</style>
