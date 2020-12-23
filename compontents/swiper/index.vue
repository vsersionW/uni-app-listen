<template>
  <view class="swiper_container">
    <swiper
      indicator-active-color="#ffffff"
      class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item
        class="w-100 animated my-animate"
        v-for="(item, index) in swiperImage"
        :key="index"
      >
        <image class="img" mode="widthFix" :src="item.image"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      swiperImage: [
        { image: "../../static/swiper/01.png" },
        { image: "../../static/swiper/02.png" },
        { image: "../../static/swiper/03.png" },
        { image: "../../static/swiper/04.png" },
      ],
    };
  },
};
</script>
<style scoped>
.swiper_container {
  width: 100%;
  margin-top: 20rpx;
  display: flex;
  justify-content: center;
}
.swiper {
  height: 400rpx;
  width: 95%;
}
swiper-item {
  width: 100%;
  height: 100%;
}

swiper-item image {
  width: 100%;
  height: 100%;
}
</style>