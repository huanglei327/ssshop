<template>
  <div class="c-main">
    <div class="c-temp">为你推荐</div>
    <commodity-item :items="list"></commodity-item>
  </div>

</template>

<script>
import commodityItem from '@/components/commodityItem.vue'
import { GetRecommendApi } from '@/utils/httpUtils/api.js'
export default {
  components: {
    commodityItem
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.GetRecommend()
  },
  methods: {
    GetRecommend () {
      const that = this
      const c = res => {
        that.list = res.data.recList
      }
      const param = {}
      GetRecommendApi(param).then(c)
    }
  }
}
</script>

<style scoped lang="less">
.c-main {
  width: 100%;
  height: 100%;
  background: white;
  margin-top: 10px;
  .c-temp {
    height: 60rpx;
    line-height: 60rpx;
    font-weight: 600;
    width: 100px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
