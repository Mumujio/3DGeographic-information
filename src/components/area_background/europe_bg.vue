<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>欧洲地形</h2>
        <h2>European terrain</h2>
        <p>
          欧洲西半部，北临北冰洋，西临大西洋，南临地中海。欧洲地形总特点是以平原为主，冰川地貌分布较广，高山峻岭汇集南部，海拔200米以上的高原、丘陵和山地约占全洲面积的40%，其中海拔在500,000米的仅占15%，海拔2
          000米以上的高山仅占约2%；海拔200米以下的平原约占全洲面积的60%。
        </p>
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section2">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section2 }"
      >
        <h2>欧洲气候</h2>
        <img src="@/assets/img/legend/europe.png" alt="" />
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
    <!-- 阿尔卑斯山脉 -->
    <div style="position: absolute; top: 170px; left: 30px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
      >
        <clickSvg></clickSvg>
      </a-space>
    </div>
    <!-- 东欧平原 -->
    <div style="position: absolute; top: 60px; left: 170px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
      >
        <clickSvg></clickSvg>
      </a-space>
    </div>
    <!-- 乌拉尔山脉 -->
    <div style="position: absolute; left: 320px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-3')"
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

  <!-- 返回键 -->
  <div style="position: fixed; top: 2%; right: 2%; cursor: pointer">
    <returnSvg></returnSvg>
  </div>
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
let chart = reactive({
  option: {},
});
const modal_data = reactive({
  img: "",
  name: "",
  text: "",
});
let ratio = ref(0);
let visible = ref(false);
let visible1 = ref(false);
function click_label(flag) {
  if (flag == "t-1") {
    // 阿尔卑斯山脉
    visible.value = true;
    modal_data.img = "./static/img/europe/t-1.png";
    modal_data.name = "阿尔卑斯山脉";
    modal_data.text =
      "阿尔卑斯山脉（英语：Alps），欧洲西部最高大的山脉。位于欧洲南部。西起法国东南部，经意大利北部、瑞士南部、列支敦士登、德国南部，东至奥地利和斯洛文尼亚。呈弧形东西延伸，直线长约1200千米，宽130~260千米。总面积约20.7万平方千米。平均海拔3000米左右。";
  } else if (flag == "t-2") {
    // 东欧平原
    visible.value = true;
    modal_data.img = "./static/img/europe/t-2.png";
    modal_data.name = "东欧平原";
    modal_data.text =
      "东欧平原位于欧洲东部，世界第二大平原，其范围北起北冰洋，南至黑海、里海之滨；东起乌拉尔山脉，西至波罗的海，近400万平方公里广大区域，平均海拔约170米。";
  } else if (flag == "t-3") {
    // 乌拉尔山脉
    visible.value = true;
    modal_data.img = "./static/img/europe/t-3.png";
    modal_data.name = "乌拉尔山脉";
    modal_data.text =
      "乌拉尔山脉(俄罗斯语:Ура́льские го́ры；英语:Ural Mountains)北起北冰洋喀拉海的拜达拉茨湾，南至哈萨克草原地带，绵延2000多公里，是欧亚两洲的分界线，介于东欧平原和西伯利亚平原之间。乌拉尔山脉自北至南分为极地、亚极地乌拉尔山地和北、中、南乌拉尔山5段。平均海拔500～1200米；亚极地1894米的人民峰是乌拉尔山的最高峰。山脉的宽度为40～150公里。中段低平，是欧亚两洲的重要通道。";
  } else if (flag == "w-1") {
    // 天气图文
    visible.value = true;
    modal_data.img = "./static/img/europe/w-1.png";
    modal_data.name = "欧洲气候";
    modal_data.text =
      "欧洲大部分为温带海洋性气候，也有地中海气候、温带大陆性气候、极地气候和高原山地气候等 …欧洲绝大部分地区气候具有温和湿润的特征。大部分位于温带，是世界上海洋气候分布面积最广的一洲。由于平原辽阔，从大西洋吹来的湿润西风能深入内陆，加上北大西洋暖流的影响使整个西欧沿海地区非常湿润，欧洲大陆从西向东由海洋性气候过渡到大陆性气候。";
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
            { value: 30, name: "温带海洋性气候" },
            { value: 30, name: "温带大陆性气候" },
            { value: 10, name: "地中海气候" },
            { value: 10, name: "亚寒带湿润气候" },
            { value: 10, name: "寒带气候" },
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
            ["2013年", 7.291],
            ["2014年", 7.302],
            ["2015年", 7.314],
            ["2016年", 7.327],
            ["2017年", 7.342],
            ["2018年", 7.358],
            ["2019年", 7.374],
            ["2020年", 7.392],
            ["2021年", 7.414],
            ["2022年", 7.431],
          ],
        },
      ],
      title: {
        text: "欧洲近十年人口总数变化",
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
  scene.children[2].children[0].add(tLabael);
  // scene.children[1].add(tLabael);
  scene.children[3].add(wLabel);
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
  } else if (newValue >= 0.1 && newValue < 0.83) {
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
    background-image: url("@/views/scene_Europe/img/photo1.jpg");
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
    background-image: url("@/views/scene_Europe/img/photo2.jpg");
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
