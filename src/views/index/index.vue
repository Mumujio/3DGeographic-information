<template>
  <div class="logoContent" v-if="!option.clickScene">
    <img src="./img/logo.png" alt="" />
    <div class="text">Geographic information teaching and popularization</div>
  </div>
  <div class="goIndex" v-if="option.clickScene" @click="goIndex">
    <a-button ghost type="primary" size="large">
      返回
      <template #icon><StepBackwardOutlined /></template>
    </a-button>
  </div>
  <!-- <indexLabel ref="label"></indexLabel> -->
  <canvas ref="webgl"></canvas>
  <sceneClick :clickScene="option.clickScene"></sceneClick>
  <loaded :progress="option.progress"></loaded>
  <div class="tip" v-if="!option.clickScene">可以双击地球各大洲进入</div>
  <!-- <shortcutContent></shortcutContent> -->
</template>

<script setup>
import indexTHREE from "./indexTHREE/Experience";
import shortcutContent from "@/components/shortcutContent.vue";
import { reactive, ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import loaded from "@/components/loaded.vue";
import sceneClick from "@/components/sceneClick.vue";
import indexLabel from "./components/indexLabel.vue";
import { CaretLeftOutlined, StepBackwardOutlined } from "@ant-design/icons-vue";
// import shortcutContent from "@/components/shortcutContent.vue";
// three的实例总体
const three = {
  experience: null,
};
// three的实例
const webgl = ref(null);
// 单独保存three的标志信息
const sign = reactive({});
// 响应式数据
const option = reactive({
  // 加载进度
  progress: 0,
  // 点击的洲
  clickScene: "",
});
// const label = ref(null);
function goIndex() {
  // 场景置空
  option.clickScene = "";
  // 开启轨道控制器
  three.experience.camera.controls.enabled = true;
  // 使用进入首页动画
  three.experience.tween.jumpAtIndex();
}
onMounted(() => {
  // 需要在dom都渲染之后再将获取的dom传进去，不然webgl.value的canvas画布为空
  three.experience = new indexTHREE(webgl.value);

  three.experience.resources.on("sourceOnReady", (loadProgress) => {
    option.progress = loadProgress;
  });
  three.experience.resources.on("sourceReady", () => {
    // 监听大洲的场景变化
    three.experience.world.raycaster.on("sceneClick", (intersectName) => {
      //
      if (intersectName != "Sphere") {
        // 给子组件传入场景名称
        option.clickScene = intersectName;
        // 关闭轨道控制器
        three.experience.camera.controls.enabled = false;
      }
    });
  });
});

onBeforeUnmount(() => {
  three.experience.destroy();
  three.experience = null;
  // console.log(three.experience);
});
onUnmounted(() => {
  // console.log(three.experience);
});
</script>

<style lang="less" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.logoContent {
  position: absolute;
  top: 0;
  left: 0;
  height: 15%;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  img {
    // width: 100%;
    height: 100%;
  }
  .text {
    text-align: left;
    vertical-align: bottom;
    font-size: 28px;
    font-weight: 400;
    color: rgba(79, 55, 30, 1);

    width: 60%;
    padding-left: 0.2rem;
  }
}

.goIndex {
  position: absolute;

  right: 2%;
  top: 2%;

  color: white;
  z-index: 1;
  cursor: pointer;
}
.tip {
  z-index: 1;
  position: absolute;
  top: 4%;
  right: 4%;
  color: rgba(166, 166, 166, 1);
  /** 文本2 */
  font-size: 36px;
  font-weight: 500;
}
</style>
