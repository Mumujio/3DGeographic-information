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
    </section>
    <section class="section section2">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section2 }"
      >
        <h2>南美洲气候</h2>

        <img src="@/assets/img/legend/southAmerica.png" alt="" />
      </div>
      <div class="cover"></div>
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
    </section>
  </div>
  <!-- 地形label -->
  <section
    ref="terrain_label"
    style="height: 200px; width: 200px; position: relative"
    class="terrain"
    :class="{ section_hidden: hideen_flag.terrain }"
  >
    <!-- 安第斯山脉 -->
    <div style="position: absolute; left: -30px; top: -50px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
      >
        <clickSvg></clickSvg>
      </a-space>
    </div>
    <!-- 圭亚那高原 -->
    <div style="position: absolute; top: -180px; left: -20px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>
    <!-- 巴西高原 -->
    <div style="position: absolute; left: 150px; top: -40px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-3')"
        ><clickSvg></clickSvg
      ></a-space>
    </div>
    <!-- 巴塔哥尼亚高原 -->
    <div style="position: absolute; left: -50px; top: 180px">
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
  <!-- 鳄鱼label -->
  <section
    ref="alligator_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.alligator }"
    class="alligator"
  >
    <div style="position: absolute; left: 100px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('a-1')"
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

  <!-- 返回键 -->
  <div style="position: fixed; top: 2%; right: 2%; cursor: pointer">
    <returnSvg></returnSvg>
  </div>
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
  terrain: false,
  weather: true,
  alligator: true,
});
function click_label(flag) {
  if (flag == "t-1") {
    // 安第斯山脉
    visible.value = true;
    modal_data.img = "./static/img/southAmerica/t-1.jpg";
    modal_data.name = "安第斯山脉";
    modal_data.text =
      "安第斯山脉（盖丘亚语：Andes；奇楚亚语：Antis），属于科迪勒拉山系，也称安弟斯山脉或安蒂斯山脉，位于南美洲的西岸，从北到南全长8900余千米，是世界上最长的山脉。 安第斯山脉是世界上除亚洲之外最高的山脉，平均海拔3660米，最高峰是位于阿根廷境内的主山峰阿空加瓜山（Aconcagua），海拔6962米，为西半球和南半球第一高峰，是世界海拔最高的死火山。";
  } else if (flag == "t-2") {
    // 圭亚那高原
    visible.value = true;
    modal_data.img = "./static/img/southAmerica/t-2.png";
    modal_data.name = "圭亚那高原";
    modal_data.text =
      "圭亚那高原位于南美洲东北部，地处奥里诺科河以南，亚马逊河以北。基底岩系主要是太古代的花岗岩、片麻岩和片岩。在湿热的气候条件下，经过长期侵蚀，一般表现为高约300-400米的丘陵状高原。全境包括委内瑞拉南半部、巴西北部、圭亚那、法属圭亚那除沿海平原外的地区。位于圭亚那高原西北部的安赫尔瀑布为世界落差最大的瀑布。";
  } else if (flag == "t-3") {
    // 巴西高原
    visible.value = true;
    modal_data.img = "./static/img/southAmerica/t-3.png";
    modal_data.name = "巴西高原";
    modal_data.text =
      "巴西高原是世界上面积最大的高原，位于南美洲巴西境内，在亚马逊平原和拉普拉塔平原之间，面积有500多万平方千米，占据超过1/2的巴西领土，和青藏高原不同，巴西高原不那么冷，大多地区属于热带，亚热带气候区，下雨多，天气热，海拔也没那么高，地表起伏和缓，大约多在600~900米之间，从东南向西北倾斜，东部多脊状山岭或断块山，西部是桌子形状的高地，巴西高原矿产丰富，有铁、锰、有色金属及水晶等。";
  } else if (flag == "t-4") {
    // 巴塔哥尼亚高原
    visible.value = true;
    modal_data.img = "./static/img/southAmerica/t-4.png";
    modal_data.name = "巴塔哥尼亚高原";
    modal_data.text =
      "巴塔哥尼亚地区主要位于阿根廷境内，小部分属于智利。几乎包括阿根廷本土南部的所有土地。面积约673,000平方公里（260,000平方哩），由广阔的草原和沙漠组成，从南纬37°伸展到南纬51°。巴塔哥尼亚边界大约西抵巴塔哥尼亚安第斯山脉，北滨科罗拉多河，东临大西洋，南濒麦哲伦海峡；海峡南面的火地岛分别隶属于阿根廷和智利，有时也划入巴塔哥尼亚的范围内。";
  } else if (flag == "w-1") {
    // 天气图文
    visible.value = true;
    modal_data.img = "./static/img/southAmerica/w-1.png";
    modal_data.name = "南美洲气候";
    modal_data.text =
      "南美洲大部分地区属热带雨林气候和热带草原气候。气候特点是温暖湿润，以热带为主，大陆性不显著。全洲除山地外，冬季最冷月的平均气温均在0℃以上，占大陆主要部分的热带地区，平均气温超过20℃。冬季远比北美洲暖和。而南美洲西部则有呈带状分布的热带沙漠气候和地中海气候，安第斯山脉则为高山气候，在南美洲东南部则有亚热带季风和季风性湿润气候。";
  } else if (flag == "w-2") {
    // 天气饼图
    chart.option = {
      title: {
        text: "南美洲各气候比例",
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
            { value: 7, name: "热带雨林气候" },
            { value: 33, name: "热带草原气候" },
            { value: 15, name: "亚热带湿润气候" },
            { value: 13, name: "亚热带干旱气候" },
            { value: 20, name: "温带海洋性气候" },
            { value: 10, name: "高山气候" },
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
            ["2013年", 4.062],
            ["2014年", 4.11],
            ["2015年", 4.157],
            ["2016年", 4.204],
            ["2017年", 4.251],
            ["2018年", 4.299],
            ["2019年", 4.347],
            ["2020年", 4.395],
            ["2021年", 4.443],
            ["2022年", 4.491],
          ],
        },
      ],
      title: {
        text: "南美洲近十年人口总数变化",
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
  } else if (flag == "a-1") {
    chart.option = {
      title: {
        text: "南美洲鳄鱼品种及其数量",
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
            { value: 300, name: "狄氏鳄鱼" },
            { value: 10, name: "黑鳄鱼" },
            { value: 2, name: "阿莫罗鳄鱼" },
            { value: 0.6, name: "象鳄鱼" },
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
  let aLabel = tagtest(alligator_label.value);
  scene.children[3].children[0].add(tLabael);
  scene.children[2].add(wLabel);
  scene.children[4].add(aLabel);

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
  } else if (newValue >= 0.65 && newValue < 1.2) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = false;
    hideen_flag.section3 = true;
  } else if (newValue >= 1.2 && newValue < 1.4) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = true;
  } else if (newValue >= 1.4) {
    hideen_flag.section1 = true;
    hideen_flag.section2 = true;
    hideen_flag.section3 = false;
  }

  // label
  if (newValue < 0.1) {
    hideen_flag.terrain = false;
    hideen_flag.weather = true;
    hideen_flag.alligator = true;
  } else if (newValue >= 0.1 && newValue < 0.85) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.alligator = true;
  } else if (newValue >= 0.85 && newValue < 1.1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.alligator = true;
  } else if (newValue >= 1.1 && newValue < 1.8) {
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
