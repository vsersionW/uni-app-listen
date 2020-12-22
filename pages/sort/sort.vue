<template>
  <view class="index_container">
    <!-- 手机导航默认高度 -->
    <view
      :style="{ height: `${$statusBarHeight}px` }"
      style="background-color: #dedede"></view>
      <isSearch />
  </view>
</template>

<script>
export default {
  data() {
    return{}
  },
};
</script>

<style scoped>
.index_container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>