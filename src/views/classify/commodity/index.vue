<template>
  <div>
    <router-link to="/search">
      <van-search placeholder="请输入搜索关键词"
                  v-model="value" />
    </router-link>
    <div v-show="false">
      <commodity-item :items="goodsList"></commodity-item>
    </div>
    <div v-show="false">
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import recommend from '@/components/recommend.vue'
import commodityItem from '@/components/commodityItem.vue'
import { GetGoodsListApi } from '@/utils/httpUtils/api.js'
export default {
  data () {
    return {
      categoryId: '',
      goodsList: []
    }
  },
  components: {
    commodityItem,
    recommend
  },
  created () {
    this.categoryId = this.$route.query.categoryId
    this.GetGoodsList()
  },
  methods: {
    GetGoodsList () {
      const param = {
        categoryId: this.categoryId
      }
      const c = res => {
        this.goodsList = res.data.data
        console.log(this.goodsList)
      }
      GetGoodsListApi(param).then(c)
    }
  }
}
</script>

<style>
</style>
