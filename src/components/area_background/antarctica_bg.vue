<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>南极洲地形</h2>
        <h2>Antarctica</h2>
        <p>
          南极洲是世界上海拔最高的洲，平均海拔2350米。地表大部分覆盖着很厚的冰层，冰层平均厚度有2000多米。冰层下面有各种不同地形，在罗斯海与威德尔海之间有一条低地，把大陆分成东、西两部分，东部是高原，西部分布着一系列褶皱山脉。 南极洲位于地球最南端，土地几乎都在南极圈内，四周濒太平洋、印度洋和大西洋。是世界上地理纬度最高的一个洲，同时也是跨经度最多的一个大洲。
        </p>
      </div>
      <div class="cover"></div>
      <!-- <div class="event-view">
          <a-space><PlusCircleOutlined /></a-space>fwefewfefwe
        </div> -->
    </section>
    <section class="section section2">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section2 }"
      >
        <h2>南极洲气候</h2>
        <img src="@/assets/img/legend/antarctica.png" alt="" />
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section3">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section3 }"
      >
        <h2>企鹅</h2>
        <p>
          企鹅（学名：Spheniscidae）：是鸟纲、企鹅科所有物种的通称。有“海洋之舟”美称的企鹅是一种最古老的游禽，它们很可能在地球穿上冰甲之前，就已经在南极安家落户。全世界的企鹅共有18种，大多数都分布和生活在南半球。
        </p>
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section4">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section4 }"
      >
        <h2>苔藓</h2>
        <p>
          南极洲苔藓是一种生长在南极洲的苔藓植物。它们是地球上最古老、最原始的陆地植物之一，被认为已经存在了至少4亿年。
          南极洲苔藓生长在南极洲大陆和周围的岛屿上，它们能够在极端寒冷的气候下生存，其生命力非常顽强。南极洲苔藓通常呈现出黄绿色或灰绿色，由于南极洲地区缺乏降水，所以它们的生长速度非常缓慢，每年只会增长1-2毫米。
        </p>
      </div>
      <div class="cover"></div>
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
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
      >
        <clickSvg></clickSvg>
      </a-space>
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
        style="cursor: pointer; font-size: 40px"
        @click="click_label('w-1')"
      >
        <chartSvg></chartSvg>
      </a-space>
    </div>
    <!-- <div style="position: absolute; top: 150px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('w-2')"
      >
        <chartSvg></chartSvg>
      </a-space>
    </div> -->
  </section>
  <!-- 企鹅label -->
  <section
    ref="penguin_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.penguin }"
    class="penguin"
  >
    <div style="position: absolute">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('p-1')"
      >
        <chartSvg></chartSvg>
      </a-space>
    </div>
  </section>
  <!-- 苔藓label -->
  <section
    ref="moss_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.moss }"
    class="moss"
  ></section>

  <!-- 弹窗 -->
  <label_Amodel
    v-model:visible="visible"
    v-model:modal_data="modal_data"
  ></label_Amodel>

  <!-- 图表弹窗 -->
  <label_chart
    v-if="visible1"
    v-model:visible="visible1"
    :option="chart.option"
  ></label_chart>

  <!-- 返回键 -->
  <div style="position: fixed; top: 2%; right: 2%; cursor: pointer">
    <returnSvg></returnSvg>
  </div>
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
const penguin_label = ref(null);
const moss_label = ref(null);
let visible = ref(false);
let visible1 = ref(false);
let ratio = ref(0);
const modal_data = reactive({
  img: "",
  name: "",
  text: "",
});
let chart = reactive({
  option: {},
});
const hideen_flag = reactive({
  section1: false,
  section2: true,
  section3: true,
  section4: true,
  terrain: false,
  weather: true,
  moss: true,
  penguin: true,
});
function click_label(flag) {
  if (flag == "t-1") {
    // 撒哈拉沙漠
    visible.value = true;
    modal_data.img = "./static/img/antarctica/t-1.png";
    modal_data.name = "南极洲";
    modal_data.text =
      "南极洲是世界上海拔最高的洲，平均海拔2350米。地表大部分覆盖着很厚的冰层，冰层平均厚度有2000多米。冰层下面有各种不同地形，在罗斯海与威德尔海之间有一条低地，把大陆分成东、西两部分，东部是高原，西部分布着一系列褶皱山脉。 南极洲位于地球最南端，土地几乎都在南极圈内，四周濒太平洋、印度洋和大西洋。是世界上地理纬度最高的一个洲，同时也是跨经度最多的一个大洲。";
  } else if (flag == "w-1") {
    // 年平均气温
    chart.option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "30%"],
      },
      visualMap: {
        type: "piecewise",
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [
          {
            gt: 1,
            lt: 3,
            color: "rgba(0, 0, 180, 0.4)",
          },
          {
            gt: 5,
            lt: 7,
            color: "rgba(0, 0, 180, 0.4)",
          },
        ],
      },
      series: [
        {
          type: "line",
          smooth: 0.6,
          symbol: "none",
          lineStyle: {
            color: "#5470C6",
            width: 5,
          },
          markLine: {
            symbol: ["none", "none"],
            label: { show: false },
            data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
          },
          areaStyle: {},
          data: [
            ["2011年", -30.9],
            ["2012年", -31.2],
            ["2013年", -31.2],
            ["2014年", -30.9],
            ["2015年", -31.0],
            ["2016年", -31.2],
            ["2017年", -31.0],
            ["2018年", -30.9],
            ["2019年", -31.1],
            ["2020年", -30.9],
          ],
        },
      ],
      title: {
        text: "南极洲2011-2020年平均气温",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
        textStyle: {
          fontSize: (18 * window.innerWidth) / 1920,
          fontWeight: 400,
          padding: [0, 0, 0, 10],
        },
      },
    };
    visible1.value = true;
  } else if (flag == "p-1") {
    chart.option = {
      title: {
        text: "南极洲企鹅部分品种数量",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
        textStyle: {
          fontSize: (18 * window.innerWidth) / 1920,
          fontWeight: 400,
          padding: [0, 0, 0, 10],
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          right: 0,
          data: [
            { value: 50, name: "皇帝企鹅" },
            { value: 350, name: "阿德利企鹅" },
            { value: 3000, name: "小企鹅" },
            { value: 10, name: "黄眉企鹅和南极企鹅等" },
          ],
          emphasis: {
            itemStyle: {
              fontSize: (18 * window.innerWidth) / 1920,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
      grid: {
        right: 0,
      },
    };
    visible1.value = true;
  }
}

onMounted(() => {
  let tLabael = tagtest(terrain_label.value);
  let wLabel = tagtest(weather_label.value);
  let pLabel = tagtest(penguin_label.value);
  let mLabel = tagtest(moss_label.value);
  scene.children[1].add(pLabel);
  scene.children[2].add(mLabel);

  scene.children[3].add(tLabael);
  scene.children[4].add(wLabel);

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
  } else if (newValue >= 1.09 && newValue < 1.4) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
    hideen_flag.section4 = true;
  } else if (newValue >= 1.4 && newValue < 2.3) {
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
    hideen_flag.penguin = true;
    hideen_flag.moss = true;
  } else if (newValue >= 0.08 && newValue < 0.9) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.penguin = true;
    hideen_flag.moss = true;
  } else if (newValue >= 0.9 && newValue < 1.08) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.penguin = true;
    hideen_flag.moss = true;
  } else if (newValue >= 1.08 && newValue < 1.8) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.penguin = true;
    hideen_flag.moss = true;
  } else if (newValue >= 1.8 && newValue < 2.1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.penguin = false;
    hideen_flag.moss = true;
  } else if (newValue >= 2.1 && newValue < 2.4) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.penguin = true;
    hideen_flag.moss = true;
  } else {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.penguin = true;
    hideen_flag.moss = false;
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
      font-size: 60px;
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
    background-image: url("@/views/scene_Antarctica/img/photo1.jpg");
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
    background-image: url("@/views/scene_Antarctica/img/photo2.jpg");
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
    background-image: url("@/views/scene_Antarctica/img/photo3.jpg");
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("@/views/scene_Antarctica/img/photo4.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.section_hidden {
  opacity: 0;
}
.section-Aleft,
.terrain,
.penguin,
.moss,
.weather {
  transition: all 0.8s;
}
</style>
