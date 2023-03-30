<template>
  <div ref="modal" class="modalOwn">
    <a-modal
      v-model:visible="visible"
      :footer="null"
      :maskClosable="false"
      @cancel="cancel"
      class="my-modal"
      :centered="true"
      :getContainer="() => $refs.modal"
    >
      <div id="echart" ref="echart" style="width: 100%; height: 100%"></div>
    </a-modal>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref, onBeforeUnmount } from "vue";
let myChart = null;

let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  option: {
    type: Object,
    default: {},
  },
});
const emit = defineEmits(["update:visible"]);
let echart = ref(null);
const cancel = () => {
  emit("update:visible", false);
};
function resize_fn() {
  if (myChart && echart.value) {
    myChart.resize({
      width: echart.value.clientWidth + "px",
      height: echart.value.clientHeight + "px",
    });
  }
}
onMounted(() => {
  const chartElem = echart.value;
  setTimeout(() => {
    myChart = echarts.init(echart.value, null, {
      width: chartElem.clientWidth + "px",
      height: chartElem.clientHeight + "px",
    });
    myChart.setOption(props.option);

    window.addEventListener("resize", resize_fn);
  }, 0);
});

onBeforeUnmount(() => {
  myChart = null;
  window.removeEventListener("resize", resize_fn);
});
</script>
<style scoped lang="less">
/deep/ .my-modal {
  width: auto !important;
}
/deep/ .ant-modal-body {
  height: 100%;
  width: 100%;
  margin: 24px;
}
/deep/ .ant-modal-content {
  height: 60vh;
  width: 60vw;
  overflow: hidden hidden;
}
// /deep/ #echart {
//   width: 100% !important;
//   height: 100% !important;
//   div:nth-child(1) {
//     position: absolute;
//   }
// }
// /deep/ canvas {
//   width: 100% !important;
//   height: 100% !important;
// }
</style>
