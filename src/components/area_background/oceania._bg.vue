<template>
  <div class="scrollBackground">
    <section class="section section1">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section1 }"
      >
        <h2>大洋洲地形</h2>
        <h2>Oceania</h2>
        <p>
          澳大利亚大陆也可分为三个地形区：第一，东部山地。大分水岭纵贯南北，海拔约800～1000米，东坡较陡，西坡平缓；第二，西部高原。是一片低矮广阔的高原。面积约占全国面积1／2以上，沙漠和半沙漠面积很大；第三，中部平原。海拔在200米以下，最低处是埃尔湖（—12米）。地面河流很少，但地下水丰富，形成世界著名的大自流井盆地。
          大洋洲的地形也是由三大地形区组成。
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
        <h2>大洋洲气候</h2>
        <img src="@/assets/img/legend/oceania.png" alt="" />
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section3">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section3 }"
      >
        <h2>袋鼠</h2>
        <p>
          袋鼠是一种属于袋鼠目的有袋动物，主要分布于澳大利亚大陆和巴布亚新几内亚的部分地区。其中，有些种类为澳大利亚独有。不同种类的袋鼠在澳大利亚各种不同的自然环境中生活，从凉性气候的雨林和沙漠平原到热带地区。袋鼠是跳得最高最远的哺乳动物。
        </p>
      </div>
      <div class="cover"></div>
    </section>
    <section class="section section4">
      <div
        class="section-Aleft"
        :class="{ section_hidden: hideen_flag.section4 }"
      >
        <h2>考拉</h2>
        <p>
          树袋熊（学名：Phascolarctos
          cinereus）是树袋熊科、树袋熊属动物，体形肥胖，毛又乱又厚，没有尾巴。成年树袋熊体长约70-80厘米，体重10千克左右，身体为浅灰色到浅黄色，腹部周围的颜色相对较亮，鼻子光秃秃的，大而圆，脑袋圆滚滚的，耳朵上的毛十分蓬松，前肢具有非常强壮的爪，善于攀岩。树袋熊大部分的时间都是在树上度过的，几乎终生都在桉树上度过。树袋熊是澳大利亚的国宝，也是澳大利亚奇特的珍贵原始树栖动物。
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
    <!-- 撒哈拉沙漠 -->
    <div style="position: absolute; top: 65px; left: 410px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-1')"
      >
        <clickSvg></clickSvg>
      </a-space>
    </div>
    <!-- 埃塞俄比亚高原 -->
    <div style="position: absolute; left: 320px; top: 50px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('t-2')"
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
  <!-- 袋鼠label -->
  <section
    ref="kangaroo_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.Kangaroo }"
    class="Kangaroo"
  >
    <div style="position: absolute; left: 100px">
      <a-space
        style="cursor: pointer; font-size: 40px"
        @click="click_label('k-1')"
        ><chartSvg></chartSvg
      ></a-space>
    </div>
  </section>
  <!-- 考拉label -->
  <section
    ref="koala_label"
    style="height: 200px; width: 200px; position: relative"
    :class="{ section_hidden: hideen_flag.koala }"
    class="koala"
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
const kangaroo_label = ref(null);
const koala_label = ref(null);
let chart = reactive({
  option: {},
});
const visible = ref(false);
let visible1 = ref(false);
let ratio = ref(0);
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
  Kangaroo: true,
  koala: true,
});
function click_label(flag) {
  if (flag == "t-1") {
    // 撒哈拉沙漠
    visible.value = true;
    modal_data.img = "./static/img/oceania/t-1.png";
    modal_data.name = "悉尼歌剧院";
    modal_data.text =
      "悉尼歌剧院（Sydney Opera House），位于澳大利亚新南威尔士州悉尼市区北部的便利朗角，1959年3月动工建造，1973年10月20日正式投入使用，是澳大利亚地标式建筑 悉尼歌剧院占地面积1.8公顷，坐落在距离海面19米的花岗岩基座上，最高的壳顶距海面60米，总建筑面积88000平方米，有一个2700座的音乐厅，一个1550座的歌剧院和一个420座的小剧场，有展览、录音、酒吧、餐厅等大小房间900个2007年，悉尼歌剧院被联合国教科文组织评为世界文化遗产";
  } else if (flag == "t-2") {
    visible.value = true;
    modal_data.img = "./static/img/oceania/t-2.png";
    modal_data.name = "大自流盆地";
    modal_data.text =
      "大自流盆地（Great Artesian Basin）亦称“澳大利亚大盆地”(Great Australian Basin)，是世界上最大的自流盆地。在澳大利亚，是世界最大自流盆地，位于澳大利亚大陆中部偏东。在澳大利亚岩层上，覆盖着不透水层，东部多雨，形成受水区，地下水流以每年11～16米的速度流向西部少雨地区。承压水透过钻井或天然泉眼等涌出地表，所以自流盆地因此而得名。澳大利亚的畜牧业发展得益于这种得天独厚的地形。";
  } else if (flag == "w-1") {
    // 天气图文
    visible.value = true;
    modal_data.img = "./static/img/oceania/w-1.png";
    modal_data.name = "大洋洲气候";
    modal_data.text =
      "大洋洲气候特征：大部分地区处在南、北回归线之间，绝大部分地区属热带和亚热带，除澳大利亚的内陆地区属大陆性气候外，其余地区均属海洋性气候。热带沙漠气候、热带草原气候、热带雨林气候、温带海洋气候、亚热带季风（性湿润）气候、地中海气候。";
  } else if (flag == "w-2") {
    // 天气饼图
    chart.option = {
      title: {
        text: "大洋洲各气候比例",
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
            { value: 11, name: "热带雨林气候" },
            { value: 17, name: "热带草原气候" },
            { value: 18, name: "热带沙漠气候" },
            { value: 37, name: "温带海洋性气候" },
            { value: 17, name: "亚热带海洋性气候" },
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
    // 天气饼图
    chart.option = {
      title: {
        text: "大洋洲各地区年平均降雨量",
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
      xAxis: {
        type: "category",
        data: ["悉尼", "墨尔本", "布里斯班", "珀斯", "阿德莱德", "堪培拉"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [217, 650, 168, 733, 540, 623],
          type: "bar",
        },
      ],
      grid: {
        right: 0,
      },
    };
    visible1.value = true;
  } else if (flag == "k-1") {
    // 袋鼠数据图表
    chart.option = {
      title: {
        text: "大洋洲各品种袋鼠数量情况",
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
            { value: 3000, name: "红袋鼠" },
            { value: 1500, name: "灰袋鼠" },
            { value: 200, name: "树袋熊" },
            { value: 50, name: "袋獾" },
            { value: 20, name: "袋貂" },
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
  let k1Label = tagtest(kangaroo_label.value);
  let k2Label = tagtest(koala_label.value);
  scene.children[2].add(wLabel);
  // scene.children[2].children[0].add(tLabael);
  scene.children[1].add(tLabael);
  scene.children[4].add(k1Label);
  scene.children[5].add(k2Label);

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
  } else if (newValue >= 0.08 && newValue < 0.9) {
    hideen_flag.terrain = true;
    hideen_flag.weather = true;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else if (newValue >= 0.9 && newValue < 1.1) {
    hideen_flag.terrain = true;
    hideen_flag.weather = false;
    hideen_flag.Kangaroo = true;
    hideen_flag.koala = true;
  } else if (newValue >= 1.1 && newValue < 1.8) {
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
