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
          非洲地形以高原为主，地面起伏不大，被称为“高原大陆”。平均海拔600米以上，地势由东南向西北倾斜。北部为撒哈拉沙漠，东部由北向南依次是埃塞俄比亚高原、东非高原、南非高原，中部赤道附近西部刚果盆地。非洲大部分地区位于南北回归线之间，全年高温地区的面积广大，有“热带大陆”之称。
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
        <img src="@/assets/img/legend/africa.png" alt="" />
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
          leo），猫科豹属动物，是现存最大的猫科动物之一，被列入《世界自然保护联盟濒危物种红色名录》。
          非洲狮主要分布于非洲草原，颜色以浅黄棕色为多。雄性长有很长的鬃毛，一直延伸到肩部和胸部。雌狮体重大致相当于雄狮的一半。四肢非常的强壮，它们的爪子也很宽。
          主要生活于草原和开阔的丛林地区或半沙漠地带。
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
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
      >
        <clickSvg></clickSvg>
      </a-space>
    </div>
    <!-- 埃塞俄比亚高原 -->
    <div style="position: absolute; left: 540px; top: -50px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>
    <!-- 刚果盆地 -->
    <div style="position: absolute; left: 350px; top: 60px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-3')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>
    <!-- 南非高原 -->
    <div style="position: absolute; left: 380px; top: 300px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-4')"
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
  <!-- 狮子label -->
  <section
    ref="lion_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.lion }"
    class="lion"
  >
    <!-- <div style="position: absolute">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('l-1')"
        ><clickSvg></clickSvg
      ></a-space>
    </div> -->
    <div style="position: absolute; left: 100px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('l-1')"
        ><chartSvg></chartSvg
      ></a-space>
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
import { labelRenderer, tagtest } from "@/utils/threejs/label/tag2D.js";

// import fullpage from "fullpage.js";
const props = defineProps({
  newSection: 0,
  threeInstance: {},
});
const { sizes, world, time, camera, scene, scroll } = props.threeInstance;

const terrain_label = ref(null);
const weather_label = ref(null);
const lion_label = ref(null);
let visible = ref(false);
let visible1 = ref(false);
const modal_data = reactive({
  img: "",
  name: "",
  text: "",
});
let ratio = ref(0);
let chart = reactive({
  option: {},
});

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
    visible.value = true;
    modal_data.img = "./static/img/africa/t-1.jpg";
    modal_data.name = "撒哈拉沙漠";
    modal_data.text =
      "撒哈拉沙漠（Sahara Desert）形成于约250万年前，是世界最大的沙质荒漠，面积约932万平方千米，位于非洲北部。该地区气候条件非常恶劣，是地球上最不适合生物生存的地方之一。“撒哈拉”是阿拉伯语的音译，在阿拉伯语中“撒哈拉”为大沙漠，源自当地游牧民族图阿雷格人的语言，原意即为“大荒漠”";
  } else if (flag == "t-2") {
    // 埃塞俄比亚高原
    visible.value = true;
    modal_data.img = "./static/img/africa/t-2.png";
    modal_data.name = "埃塞俄比亚高原";
    modal_data.text =
      "埃塞俄比亚高原在东非埃塞俄比亚境内，又叫阿比西尼亚高原，是一个平均海拔2500～3000米、在古老地层上覆盖广大玄武岩的波状高原。高原上耸立着一座座海拔超过4000米的火山山峰，显得十分宏伟壮丽，为非洲地势最高处，有非洲“屋脊”之称。面积约80多万平方千米，非洲重要农业区，世界咖啡原产地。还特产苔麸、努格（油菊）、葛须等。";
  } else if (flag == "t-3") {
    // 刚果盆地
    visible.value = true;
    modal_data.img = "./static/img/africa/t-3.jpg";
    modal_data.name = "刚果盆地";
    modal_data.text =
      "刚果盆地(英语：Congo Basin；斯瓦希里语：Bonde la Kongo；法语：Bassin du Congo)，非洲最大盆地，属于世界十大盆地（曾称为世界最大盆地），又称扎伊尔盆地。位于非洲中西部，呈方形，赤道横贯中部。面积约337万平方千米 [1]  。位于下几内亚高原、南非高原、东非高原及低小的阿赞德高原之间，位于喀麦隆、中非共和国、刚果民主共和国、赤道几内亚、加蓬和刚果共和国。";
  } else if (flag == "t-4") {
    // 南非高原
    visible.value = true;
    modal_data.img = "./static/img/africa/t-4.jpg";
    modal_data.name = "南非高原";
    modal_data.text =
      "南非高原，是非洲最大的高原，位于刚果盆地南缘和赞比西河以南。地势比前两个高原低，只在边缘部分有较高的山地。高原东南边缘的德拉肯斯堡山脉绵延1000多公里，山脉东南坡的悬崖峭壁俯视着辽阔的印度洋。";
  } else if (flag == "w-1") {
    // 天气图文
    visible.value = true;
    modal_data.img = "./static/img/africa/w-1.png";
    modal_data.name = "非洲气候";
    modal_data.text =
      "非洲的气候特点：气温高，干燥地区广，气候带呈明显对称分布，有“热带大陆”之称非洲气候类型的形成原因无非是：纬度因素、海陆因素、地形因素、洋流因素等共同作用的结果。非洲的气候类型呈明显的带状分布，而且南北大致对称。";
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
  } else if (flag == "l-1") {
    // 狮子数据图表
    chart.option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "2011年",
          "2012年",
          "2013年",
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
          data: [
            23050, 21020, 30300, 23030, 20200, 35463, 20023, 24023, 22466,
            24366,
          ],
        },
      ],
      title: {
        text: "非洲狮2011-2020估算种群数量",
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
