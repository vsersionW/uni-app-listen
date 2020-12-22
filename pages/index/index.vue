<template>
  <view class="index_container">
    <!-- 默认高度 -->
    <view
      :style="{ height: `${$statusBarHeight}px` }"
      style="background-color: #dedede"
    >
    </view>
    <!-- 搜索组件 -->
    <isSearch />
    <!-- swiper组件 -->
    <is-swiper/>
  </view>
</template>

<script>
// swiper组件
import isSwiper from "../../compontents/swiper";
export default {
  components:{
    isSwiper
  },
  data() {
    return {
    };
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
  },
};
</script>

<style scoped>
.index_container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>