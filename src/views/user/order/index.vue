<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="标签 1"></van-tab>
      <van-tab title="标签 2"></van-tab>
      <van-tab title="标签 3"></van-tab>
      <van-tab title="标签 4"></van-tab>
    </van-tabs>
    <order-list></order-list>
  </div>
</template>

<script>
import orderList from '@/components/OrderList.vue'
export default {
  components: {
    orderList
  },
  data () {
    return {
      active: 2
    }
  }
}
</script>

<style>
</style>
