<template>
  <view>
    <!-- 头部标题子自组件拆分 -->
    <book-header>
        <template #title>猜你喜欢</template>
        <template #tips>更多推荐</template>
    </book-header>
    <!-- item*3 -->
    <view class="flex align-center px-1 py-2">
      <block v-for="(item,index) in booksList" :key="index">
          <view class="flex-1 align-center flex flex-column" style="height: 320rpx">
        <image
          mode="widthFix"
          class="w-100"
          style="height: 100%"
          :src="item.imgurl"
        ></image>
        <text class="text-light-muted my-1">{{item.bookName}}</text>
      </view>
      </block>
    </view>
  </view>
</template>

<script>
import bookHeader from "./item";
export default {
    props:{
        booksList:{
            type:Array,
            defalut:()=>[]
        }
    },
    components:{
        bookHeader
    }
};
</script>

<style>
</style>