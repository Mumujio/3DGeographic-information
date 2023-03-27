<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>亚洲地形</h2>
        <h2>Asia</h2>
        <p>
          亚洲地形复杂多样，主要以高原、山地为主，亚洲的地势特点是中部高、四周低，亚洲是世界上除南极洲以外平均海拔最高的大洲；亚洲地面起伏大，高低悬殊。亚洲的地势很高、地表起伏极大，中间高、周围低，隆起与凹陷相间，东部有一列纵长的岛弧。
        </p>
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section2">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section2 }"
      >
        <h2>亚洲气候</h2>
        <img src="@/assets/img/legend/asia.png" alt="" />
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section3">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section3 }"
      >
        <h2>大熊猫</h2>
        <p>
          体型肥硕似熊，但头圆尾短，头部和身体毛色黑白相间分明。只限于我国长江上游向青藏高原过渡的高山深谷地带，包括秦岭，岷山、邛崃山、大小相岭和大小凉山等山系。大熊猫的食谱非常特殊，几乎包括了在高山地区可以找到的各种竹子，大熊猫也偶尔食肉。大熊猫独特的食物特性使它被当地人称作"竹熊"。
        </p>
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section4">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section4 }"
      >
        <h2>银杏</h2>
        <p>
          银杏（学名：Ginkgo biloba
          L.）是银杏科、银杏属植物。乔木，高达40米，胸径可达4米；幼树树皮浅纵裂，大树之皮呈灰褐色，深纵裂，粗糙；幼年及壮年树冠圆锥形，老则广卵形。叶扇形，有长柄，淡绿色，无毛，有多数叉状并列细脉，顶端宽5-8厘米，在短枝上常具波状缺刻，在长枝上常2裂，基部宽楔形。
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
    <div style="position: absolute; left: 20px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>

    <div style="position: absolute; left: 80px; top: -90px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>
    <div style="position: absolute; left: 250px; top: 20px">
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
  <!-- 熊猫label -->
  <section
    ref="panda_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.panda }"
    class="panda"
  >
    <div style="position: absolute; left: 100px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('p-1')"
        ><chartSvg></chartSvg
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
    <!-- <a-popover title="银杏叶" placement="left">
      <template #content>
        <img
          src="../../../public/static/img/asia/g-1.png"
          alt=""
          style="max-width: 20vw"
        />
      </template>
      <div style="position: absolute">
        <a-space
          style="cursor: pointer; font-size: 40px"
          @click="click_label('g-1')"
          ><PlayCircleTwoTone></PlayCircleTwoTone
        ></a-space>
      </div>
    </a-popover> -->
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
import { PlayCircleTwoTone } from "@ant-design/icons-vue";

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
const visible1 = ref(false);
let ratio = ref(0);
let chart = reactive({
  option: {},
});
const modal_data = reactive({
  img: "",
  name: "",
  text: "",
});

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
function click_label(flag) {
  if (flag == "t-1") {
    // 青藏高原
    visible.value = true;
    modal_data.img = "./static/img/asia/t-2.png";
    modal_data.name = "青藏高原";
    modal_data.text =
      "青藏高原（Qinghai-Tibet Plateau）是中国最大、世界海拔最高的高原，也是中华民族的源头地之一和中华文明的发祥地之一，占全中国23%面积，被誉为“世界屋脊”“第三极”。";
  } else if (flag == "t-2") {
    // 喜马拉雅山
    visible.value = true;
    modal_data.img = "./static/img/asia/t-1.png";
    modal_data.name = "喜马拉雅山";
    modal_data.text =
      "喜马拉雅山脉（梵语：hima alaya，意为雪域），藏语意为“雪的故乡”，是世界海拔最高的山脉[1]，是东亚大陆与南亚次大陆的天然界山，也是中国与印度、尼泊尔、不丹、巴基斯坦等国的天然国界。其位于青藏高原南巅边缘，西起克什米尔的南迦-帕尔巴特峰(海拔8125米)，东至雅鲁藏布江大拐弯处的南迦巴瓦峰(海拔7782米)。";
  } else if (flag == "t-3") {
    // 西西伯利亚平原
    visible.value = true;
    modal_data.img = "./static/img/asia/t-3.png";
    modal_data.name = "西西伯利亚平原";
    modal_data.text =
      "西西伯利亚平原（Western Siberian Plain）位于俄罗斯境内，是亚洲第一大平原，世界第三大平原。它南北长2000千米，东西宽1500千米，面积260万平方千米。它自北而南平行分布着苔原、森林、森林草原、草原景观，具有典型的纬度地带性分布规律，大部分地区为亚寒带针叶林所覆盖。著名景点有叶尼塞河、鄂毕河等。";
  } else if (flag == "w-1") {
    // 天气
    visible.value = true;
    modal_data.img = "./static/img/asia/w-1.png";
    modal_data.name = "亚洲气候简介";
    modal_data.text =
      "气候类型复杂多样。世界上的气候类型中，除了温带海洋性气候、热带草原气候外，其他气候类型在亚洲都有分布。亚洲气候复杂多样，与亚跨纬度广有关。热带、温带和寒带都有，形成了热带、温带和寒带气候。季风气候显著。亚洲东部、东南部和南部沿海、近海地区形成了典型的季风气候。温带大陆性气候分布广泛。亚洲内陆地区，距离海洋遥远，加之山地阻挡，海洋水汽难以到达，空气干燥，形成典型的温带大陆性气候。";
  } else if (flag == "w-2") {
    // 天气饼图
    chart.option = {
      title: {
        text: "亚洲各气候比例",
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
            { value: 6, name: "热带雨林气候" },
            { value: 2, name: "热带草原气候" },
            { value: 1, name: "热带沙漠气候" },
            { value: 10, name: "温带海洋性气候" },
            { value: 11, name: "温带大陆性气候" },
            { value: 4, name: "地中海气候" },
            { value: 13, name: "亚热带湿润气候" },
            { value: 18, name: "半干旱气候" },
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
            ["2012年", 41.36],
            ["2013年", 41.77],
            ["2014年", 42.17],
            ["2015年", 42.57],
            ["2016年", 42.97],
            ["2017年", 43.36],
            ["2018年", 43.74],
            ["2019年", 44.1],
            ["2020年", 44.45],
            ["2021年", 44.8],
          ],
        },
      ],
      title: {
        text: "亚洲近十年人口总数变化",
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
    // 熊猫数据图表
    chart.option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "2012年",
          "2013年",
          "2014年",
          "2014年",
          "2015年",
          "2016年",
          "2017年",
          "2018年",
          "2019年",
          "2020年",
        ],
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
          data: [1023, 1200, 1430, 1530, 1700, 1745, 1800, 1823, 1864, 1950],
        },
      ],
      title: {
        text: "大熊猫2011-2020估算种群数量",
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
  // else if (flag == "g-1") {
  //   // 银杏叶
  //   visible.value = true;
  //   modal_data.img = "./static/img/asia/g-1.png";
  //   modal_data.name = "银杏叶";
  // }
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
  } else if (newValue >= 0.08 && newValue < 0.9) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 0.9 && newValue < 1.15) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.panda = true;
    hideen_flag.ginkgo = true;
  } else if (newValue >= 1.15 && newValue < 1.8) {
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
    overflow: hidden;
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
