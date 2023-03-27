<template>
  <icon :style="{ color: 'hotpink' }" @click="push_return">
    <template #component>
      <svg
        t="1679817069822"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2756"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="75"
        height="75"
      >
        <path
          d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m263.68 591.592727c-23.272727 50.269091-59.694545 90.763636-99.374545 128A837.818182 837.818182 0 0 1 512 842.589091c12.8-13.381818 25.949091-26.647273 38.516364-40.261818 37.469091-40.610909 73.425455-82.501818 96.116363-133.469091a217.018182 217.018182 0 0 0 13.963637-45.614546 69.818182 69.818182 0 0 0-24.436364-69.12c-37.585455-31.418182-83.665455-42.007273-134.516364-48.407272v127.069091L232.727273 404.829091l270.778182-223.418182V311.854545c36.305455 10.24 72.261818 18.734545 107.054545 30.603637a360.727273 360.727273 0 0 1 129.745455 72.727273 144.756364 144.756364 0 0 1 35.374545 176.407272z"
          fill="#F4F5CF"
          p-id="2757"
        ></path>
      </svg>
    </template>
  </icon>
</template>

<script setup>
import Icon from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const push_return = () => {
  router.push("/index");
};
</script>
<style scoped lang="less"></style>
