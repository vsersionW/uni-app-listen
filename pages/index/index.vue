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
    <!-- swiper -->
    <view class="swiper_container animated" hover-class="pulse">
      <swiper
        indicator-active-color="#ffffff"
        class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item v-for="(item,index) in swiperImage" :key="index">
          <image mode='widthFix' :src='item.image'></image>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      swiperImage:[
        {image:"../../static/swiper/01.png"},
        {image:"../../static/swiper/02.png"},
        {image:"../../static/swiper/03.png"},
        {image:"../../static/swiper/04.png"},
      ]
    };
  },
  onShow:function(){
    console.log(this.swiperImage)
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
.swiper_container {
  width: 100%;
  margin-top: 20rpx;
  display: flex;
  justify-content: center;
}
.swiper{
  height: 400rpx;
  width: 95%;
}
swiper-item{
  width: 100%;
  height: 100%;
}
swiper-item image{
  width: 100%;
  height: 100%;
}
</style>