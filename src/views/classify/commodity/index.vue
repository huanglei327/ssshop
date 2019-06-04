<template>
  <div>
    <div>
      <commodity-item :items="goodsList"></commodity-item>
    </div>
  </div>
</template>

<script>
import commodityItem from '@/components/commodityItem.vue'
import { GetGoodsListApi } from '@/utils/httpUtils/api.js'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  components: {
    commodityItem
  },
  created () {
    this.GetGoodsList()
  },
  methods: {
    GetGoodsList () {
      const param = {
        categoryId: '1008002'
      }
      const c = res => {
        console.log(res)

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
