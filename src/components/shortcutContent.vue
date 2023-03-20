<template>
  <div class="shortcutContent">
    <a-menu
      mode="vertical"
      theme="dark"
      @click="menuClick"
      triggerSubMenuAction="click"
    >
      <a-sub-menu key="sub1">
        <template #icon><GlobalOutlined /></template>
        <template #title>七大洲详情</template>
        <a-menu-item key="1">亚洲 Asia</a-menu-item>
        <a-menu-item key="2">非洲 Africa</a-menu-item>
        <a-menu-item key="3">欧洲 Europe</a-menu-item>
        <a-menu-item key="4">北美洲 NorthAmerica</a-menu-item>
        <a-menu-item key="5">南美洲 SouthAmerica</a-menu-item>
        <a-menu-item key="6">大洋洲 Oceania</a-menu-item>
        <a-menu-item key="7">南极洲 Antarctica</a-menu-item>
      </a-sub-menu>
      <!-- <a-sub-menu key="sub2">
        <template #icon> <MenuFoldOutlined /></template>
        <template #title>数字世界</template>
        <a-menu-item key="8">亚洲 Asia</a-menu-item>
        <a-menu-item key="9">非洲 Africa</a-menu-item>
        <a-menu-item key="10">欧洲 Europe</a-menu-item>
        <a-menu-item key="11">北美洲 NorthAmerica</a-menu-item>
        <a-menu-item key="12">南美洲 SouthAmerica</a-menu-item>
        <a-menu-item key="13">大洋洲 Oceania</a-menu-item>
        <a-menu-item key="14">南极洲 Antarctica</a-menu-item>
      </a-sub-menu> -->
      <a-menu-item key="8">
        <template #icon> <MenuFoldOutlined /></template>
        <span>数字世界</span>
      </a-menu-item>
      <a-menu-item key="9">
        <template #icon><CaretLeftOutlined /></template>
        <span>首页</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup>
import {
  MenuFoldOutlined,
  GlobalOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
function menuClick(item) {
  if (item.key == 1) {
    router.push("/scene/asia");
  } else if (item.key == 2) {
    router.push("/scene/africa");
  } else if (item.key == 3) {
    router.push("/scene/europe");
  } else if (item.key == 4) {
    router.push("/scene/northAmerica");
  } else if (item.key == 5) {
    router.push("/scene/southAmerica");
  } else if (item.key == 6) {
    router.push("/scene/oceania");
  } else if (item.key == 7) {
    router.push("/scene/antarctica");
  } else if (item.key == 8) {
    router.push("/scene/numberWord");
  } else if (item.key == 9) {
    router.push("/");
  } else if (item.key == 10) {
  } else if (item.key == 11) {
  } else if (item.key == 12) {
  }
}
</script>
<style lang="less" scoped>
.shortcutContent {
  z-index: 0;
  position: fixed;
  right: 1%;
  // bottom: 1%;
  top:50%
  // width: 6%;
}
</style>
