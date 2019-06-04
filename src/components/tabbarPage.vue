<template>
  <div>
    <van-tabbar v-model="active"
                @change="tabChange"
                style="z-index:3000;">
      <van-tabbar-item>
        <span slot-scope="props"
              :class="props.active ? 'tabColor' : 'tabColorh'">首页</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? icon.home_b : icon.home_a">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props"
              :class="props.active ? 'tabColor' : 'tabColorh'">分类</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? icon.class_b : icon.class_a">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props"
              :class="props.active ? 'tabColor' : 'tabColorh'">购物车</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? icon.shop_b : icon.shop_a">
      </van-tabbar-item>
      <van-tabbar-item>
        <span slot-scope="props"
              :class="props.active ? 'tabColor' : 'tabColorh'">个人</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? icon.user_b : icon.user_a">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  props: ['state'],
  data () {
    return {
      icon: {
        home_a: require('@/assets/images/tabbar/icon-home-a.png'),
        home_b: require('@/assets/images/tabbar/icon-home-b.png'),
        class_a: require('@/assets/images/tabbar/icon-search-a.png'),
        class_b: require('@/assets/images/tabbar/icon-search-b.png'),
        shop_a: require('@/assets/images/tabbar/icon-shop-a.png'),
        shop_b: require('@/assets/images/tabbar/icon-shop-b.png'),
        user_a: require('@/assets/images/tabbar/icon-user-a.png'),
        user_b: require('@/assets/images/tabbar/icon-user-b.png'),
      },
      active: 0
    }
  },
  created () {
    this.active = parseInt(this.state)
  },
  methods: {
    tabChange (event) {
      var url = '/'
      switch (event) {
        case 0:
          break
        case 1:
          url = '/classIndex'
          break
        case 2:
          url = '/shopIndex'
          break
        case 3:
          url = '/userIndex'
          break
      }
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: url
      })
    }
  }
}
</script>
 
<style lang="less">
.tabColor {
  color: @fcolor;
}
.tabColorh {
  color: black;
}
</style>

 