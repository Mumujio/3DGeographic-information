<template>
  <section class="scene" v-if="clickScene == '南极洲001'">
    <h2>南极洲</h2>
    <span class="name">Antarctica</span>
    <div @click="router.push('/scene/antarctica')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
  <section class="scene" v-if="clickScene == '南美洲001'">
    <h2>南美洲</h2>
    <span class="name">SouthAmerica</span>
    <div @click="router.push('/scene/southAmerica')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
  <section class="scene" v-if="clickScene == '北美洲001'">
    <h2>北美洲</h2>
    <span class="name">NorthAmerica</span>
    <div @click="router.push('/scene/northAmerica')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
  <section class="scene" v-if="clickScene == '非洲001'">
    <h2>非洲</h2>
    <span class="name">Africa</span>
    <div @click="router.push('/scene/africa')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
  <section class="scene" v-if="clickScene == '亚洲001'">
    <h2>亚洲</h2>
    <span class="name">Asia</span>
    <div @click="router.push('/scene/asia')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
  <section class="scene" v-if="clickScene == '大洋洲001'">
    <h2>大洋洲</h2>
    <span class="name">Oceania</span>
    <div @click="router.push('/scene/oceania')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
  <section class="scene" v-if="clickScene == '欧洲001'">
    <h2>欧洲</h2>
    <span class="name">Europe</span>
    <div @click="router.push('/scene/europe')">
      <a-button ghost type="primary">
        Click to view
        <template #icon><EnterOutlined /></template>
      </a-button>
    </div>
  </section>
</template>

<script setup>
import { EnterOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const props = defineProps({
  clickScene: "",
});
const router = useRouter();
</script>

<style lang="less" scoped>
.scene {
  position: absolute;
  top: 40%;
  left: 6%;
  color: white;
  h2 {
    color: white;
    font-size: 0.6rem;
    margin: 0;
  }
  .name {
    color: white;
    font-size: 0.4rem;
  }
}
</style>
