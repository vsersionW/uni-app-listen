<template>
  <view>
      <text class="iconfont" :class='[iconName,iconColor]' :style="{fontSize:`${iconSize}rpx`}"/>
  </view>
</template>

<script>
export default {
    props:{
        iconName:{
            type:String,
            defalut:""
        },
        iconColor:{
            type:String,
            defalut:"text-danger"
        },
        iconSize:{
            type:[String,Number],
            defalut:45
        }
    }
}
</script>

<style>

</style>