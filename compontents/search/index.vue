<template>
  <view class="container">
    <view class="header">
      <isIcon iconSize="25" iconColor="text-light-muted" iconName="icon-tubiao11" />
      <input placeholder="搜索你想听的节目" />
    </view>
  </view>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.container {
  /* width: 100%;  bug */
  height: 60rpx;
  display: flex;
  justify-content: center;
}
.header {
  width: 95%;
  height: 100%;
  display: flex;
  background-color: #f9fafb;
  border-radius: 5rpx;
  justify-content: center;
  align-items: center;
  padding: 0 20rpx;
  border: 1px solid #eee;
}
isIcon{
    width: 100rpx;
    height: 100%;
}
input{
    flex: 1;
    text-indent: 10rpx;
    font-size: 25rpx;
    height: 100%;
}
</style>