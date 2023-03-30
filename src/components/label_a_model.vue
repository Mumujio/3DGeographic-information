<template>
  <div ref="modal" class="modalOwn">
    <a-modal
      v-model:visible="visible"
      :title="modal_data.name"
      :footer="null"
      :maskClosable="false"
      :centered="true"
      @cancel="cancel"
      class="my-modal"
      :getContainer="() => $refs.modal"
    >
      <a-spin :spinning="spinning">
        <img :src="modal_data.img || ''" alt="" @load="loadImg"
      /></a-spin>

      <p>{{ modal_data.text || "" }}</p>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  modal_data: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["update:visible"]);
const spinning = ref(true);
const cancel = () => {
  emit("update:visible", false);
};

const loadImg = () => {
  spinning.value = false;
};
</script>
<style scoped lang="less">
// ::v-deep .modalOwn {
//   height: 60vh;
//   overflow: hidden scroll;
//   .ant-modal-body {
//     height: 60vh;
//     overflow: hidden scroll;
//   }
// }

/deep/ .ant-modal-body {
  max-height: 60vh;
  overflow: hidden scroll;
}
img {
  width: 100%;
}
p {
  margin-top: 30px;
  text-indent: 2em;
}
</style>
