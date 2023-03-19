<template>
  <a-modal
    v-model:visible="visible"
    :title="modal_data.name"
    :footer="null"
    :maskClosable="false"
    @cancel="cancel"
  >
    <img :src="modal_data.img" alt="" />
    <p>{{ modal_data.text }}</p>
  </a-modal>
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

const cancel = () => {
  emit("update:visible", false);
};
</script>
<style scoped lang="less"></style>
