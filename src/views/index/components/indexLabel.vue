<template>
  <div class="indexLabel">
    <div class="point-southAmerica">南美洲</div>
    <div class="point-northAmerica">北美洲</div>
    <div class="point-Asia">亚洲</div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.indexLabel {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgb(163, 38, 38);
  font-weight: 600;
  .point-southAmerica {
    display: block;
    // width: 40px;
    // height: 40px;
    // top: -20px;
    // left: -20px;
  }
  .point-northAmerica {
    display: none;
    // width: 40px;
    // height: 40px;
    // top: -20px;
    // left: -20px;
  }
  .point-Asia {
    display: none;
  }
  .visible {
    display: block;
  }
}
</style>
