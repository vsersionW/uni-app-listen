<template>
   <view class="flex justify-between mx-3 my-4">
      <view v-for="(item,index) in menuList"
      :key="index" 
      @click="_to(index)"
      class="flex-1 flex flex-column justify-center align-center">
        <text :class='item.icon' style="font-size:64rpx"></text>
        <text class='text-light-black mt-1 font'>{{item.title}}</text>
      </view>
    </view>
</template>

<script>
// 定义需要跳转的路径也可以直接在父组件传来的数据中直接定义通过navigator来进行页面跳转
const navTo = {
    "0":"/pages/readLIst/readLIst",
    "1":"/pages/listenNoval/listenNoval",
    "2":"/pages/listenMusic/listenMusic",
    "3":"/pages/listenKnowledge/listenKnowledge",
}
export default {
    props:{
        menuList:{
            type:Array,
            defalut:()=>[]
        }
    },
    methods:{
        _to(index){
            console.log(navTo[index])
            uni.navigateTo({
                url:navTo[index]
            })
        }
    }
}
</script>

<style>

</style>