<template>
  <view class="flex justify-between px-2">
    <view class="font-lg">
      <slot name="title"></slot>
    </view>
    <view class="flex align-center justify-center">
      <text class="font text-light-muted">
        <slot name="tips"></slot>
      </text>
      <text class="iconfont icon-iconfonti text-light-black font-lg"></text>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style>
</style>