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
        <img src="@/assets/img/legend/northAmerica.png" alt="" />
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
    <div style="position: absolute; top: -40px; left: 250px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>

    <div style="position: absolute; left: 200px; top: 40px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>

    <div style="position: absolute; left: 340px; top: 40px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-3')"
        ><clickSvg></clickSvg
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
    <div style="position: absolute; top: 150px; left: -120px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('w-1')"
      >
        <clickSvg></clickSvg>
      </a-space>
    </div>
    <div style="position: absolute">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('w-2')"
      >
        <chartSvg></chartSvg>
      </a-space>
    </div>
    <div style="position: absolute; top: 150px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('w-3')"
      >
        <chartSvg></chartSvg>
      </a-space>
    </div>
  </section>

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
  terrain: false,
  weather: true,
});
let ratio = ref(0);
const visible = ref(false);
let visible1 = ref(false);
function click_label(flag) {
  if (flag == "t-1") {
    visible.value = true;
    modal_data.img = "./static/img/northAmerica/t-1.png";
    modal_data.name = "加拿大地盾";
    modal_data.text =
      "加拿大地盾是一个地理学、地质学术语，是北美洲板块最坚硬、最稳定的核心，又称为前寒武纪地盾区，或者加拿大高地区。地理构造上属于冰蚀高原，东部、西部、南部、中部各自特征不同。";
  } else if (flag == "t-2") {
    visible.value = true;
    modal_data.img = "./static/img/northAmerica/t-2.png";
    modal_data.name = "洛基山脉";
    modal_data.text =
      "落基山脉(The Rocky Mountains)又译作洛矶山脉，是美洲科迪勒拉山系在北美的主干，由许多小山脉组成，被称为北美洲的“脊骨”，主要的山脉从加拿大不列颠哥伦比亚省加到美国西南部的新墨西哥州，南北纵贯4800多千米，广袤而缺乏植被。其名称源自印第安部落名。巍峨的落基山脉绵延起伏，自北向南，有数千公里之长。整个落基山脉由众多小山脉组成，其中有名称的就有39个。除圣劳伦斯河外，北美几乎所有大河都源于落基山脉，是大陆的重要分水岭。";
  } else if (flag == "t-3") {
    modal_data.img = "./static/img/northAmerica/t-3.png";
    modal_data.name = "五大湖";
    modal_data.text =
      "位于北美洲的五大湖是世界最大的淡水湖群，即苏必利尔湖、密歇根湖、休伦湖、伊利湖和安大略湖等5个相连湖泊的总称，又称大湖，有“北美大陆地中海”之称。 北美五大湖除密歇根湖属于美国外，其余4湖均跨美国和加拿大两国。五大湖总面积24.52万平方千米，其中美国占72%，加拿大占28%。总蓄水容量约22.8万亿立方米，约占全世界淡水湖总量的20%。";
    visible.value = true;
  } else if (flag == "w-1") {
    modal_data.img = "./static/img/northAmerica/w-1.png";
    modal_data.name = "北美洲气候";
    modal_data.text =
      "北美洲的气候特征是气候类型复杂多样，温带大陆性气候分布十分广泛。因此北美洲西侧以大约北纬40°为界，以南地区分布为“地中海气候”，以北分布为“温带海洋性气候”，盛行西风带受到山脉的抬升明显，所以北美洲的温度海洋性气候降水量十分丰富，这两种气候类型的分布都呈条带状。";
    visible.value = true;
  } else if (flag == "w-2") {
    // 天气饼图
    chart.option = {
      title: {
        text: "非洲各气候比例",
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
            { value: 10, name: "热带雨林气候" },
            { value: 38, name: "热带草原气候" },
            { value: 17, name: "热带沙漠气候" },
            { value: 5, name: "亚热带沙漠气候" },
            { value: 4, name: "地中海气候" },
            { value: 4, name: "地中海气候" },
            { value: 12, name: "热带草原和稀树草原气候" },
            { value: 2, name: "高原气候" },
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
  } else if (flag == "w-3") {
    // 人口总数
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
            ["2013年", 13.14],
            ["2014年", 13.36],
            ["2015年", 13.58],
            ["2016年", 13.8],
            ["2017年", 14.01],
            ["2018年", 14.22],
            ["2019年", 14.43],
            ["2020年", 14.64],
            ["2021年", 14.85],
            ["2022年", 15.04],
          ],
        },
      ],
      title: {
        text: "非洲近十年人口总数变化",
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
  }
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
      tLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section1").scrollHeight
      );
    } else if (props.newSection == 1) {
      wtLabelRenderer.setSize(
        window.innerWidth,
        document.querySelector(".section2").scrollHeight
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
  // background-image: url("@/views/scene_SouthAmerica/img/photo1.jpg");

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url("@/views/scene_NorthAmerica/img/photo1.jpg");
    background-size: 100% 100%;
    // background-repeat: no-repeat;
    // background-size: contain;
  }
}

.section2 {
  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url("@/views/scene_NorthAmerica/img/photo2.jpg");
    background-size: 100% 100%;
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
