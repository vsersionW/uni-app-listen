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
    <!-- menu导航栏 -->
    <menu-list :menuList="navList"/>
    <!-- 猜你喜欢 -->
    <recommmond :booksList="booksList"/>
    <!-- 书籍列表 -->
    <bookList/>
  </view>
</template>

<script>
// swiper组件
import isSwiper from "../../compontents/swiper";
//menu组件
import menuList from "../../compontents/menuList";
// item*3
import recommmond from "../../compontents/recommmond";
// 书籍列表
import bookList from "../../compontents/bookList";
export default {
  components:{
    isSwiper,
    menuList,
    recommmond,
    bookList
  },
  data() {
    return {
      // 菜单组件数据
      navList:[
        {
          icon:"iconfont icon-icon-test text-warning",
          title:"看榜单"
        },
        {
          icon:"iconfont icon-startRead text-hover-primary",
          title:"听小说"
        },{
          icon:"iconfont icon-icon09 text-light-black",
          title:"听音乐"
        },
        {
          icon:"iconfont icon-zhishi text-success",
          title:"听知识"
        }
      ],
      // books导航组件
      booksList:[
        {
          imgurl:"/static/rebooks/Rebook1.jpg",
          bookName:"西游记"
        },
        {
          imgurl:"/static/rebooks/Rebook2.jpg",
          bookName:"三国演义"
        },
        {
          imgurl:"/static/rebooks/Rebook3.jpg",
          bookName:"水浒传"
        }
      ]
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

.nav_list{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20rpx;
}
</style>