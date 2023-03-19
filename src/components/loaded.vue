<template>
  <div class="progress" v-if="isShow">
    <div class="title">
      <h1>地理信息3D科普平台</h1>
      <div class="titleText">
        Geographic information 3D science popularization platform
      </div>
    </div>
    <div class="center">
      <div class="imgContent">
        <div class="img-load">
          <img src="@/views/index/img/load.gif" alt="" />
        </div>
        <div class="img-earth">
          <img src="@/views/index/img/earth.gif" alt="" />
        </div>
      </div>

      <div class="text">
        <div class="text1" v-if="progress != 100">{{ progress }}%</div>
        <div class="text1" v-else-if="progress == 100" @click="changeShow">
          Start
        </div>
        <div class="text2">3D Science Popularization Platform</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  progress: 0,
});
// 判断页面loaded是否显示
const isShow = ref(true);
// 派发点击开始
const emit = defineEmits(["isScrollBgr"]);
function changeShow() {
  emit("isScrollBgr", true);
  isShow.value = false;
}
</script>
<style lang="less" scoped>
.progress {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  height: 100%;
  width: 100%;

  background-image: url("@/views/index/img/backGround.jpg");
  background-size: 100% 100%;
  .title {
    position: absolute;
    top: 2%;
    left: 2%;
    width: 40%;
    opacity: 0.8;
    h1 {
      font-size: 80px;
      font-weight: 700;
      color: rgba(0, 0, 0, 1);
    }
    .titleText {
      font-size: 28px;
      font-weight: 700;
      color: rgba(0, 0, 0, 1);
    }
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    height: 100vh;
    // overflow: hidden;

    .imgContent {
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-load {
        // height: 20%;
        // padding-top: 15%;
        // z-index: 2;
        // line-height: 20%;
        position: absolute;
        display: flex;
        justify-content: center;
        height: 100%;
        img {
          height: 30%;
        }
      }
      .img-earth {
        flex: 1;
        img {
          height: 100%;
          // width: 100%;
          max-width: 100vw;
        }
      }
    }
    .text {
      flex: 1;
      // flex: auto;

      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .text1 {
        font-size: 72px;
        font-weight: 500;
        color: black;
        cursor: pointer;
        z-index: 999;
        &:hover {
          color: rgb(0, 0, 0, 0.4);
          background-color: #b9b9b9;
        }
      }
      .text2 {
        color: black;
        font-size: 36px;
        font-weight: 500;
      }
    }
  }
}
</style>
