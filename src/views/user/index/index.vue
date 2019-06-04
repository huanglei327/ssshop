<template>
  <div>
    <van-cell title="我的订单"
              value="查看全部订单"
              @click="goOrderDetails(0)"
              is-link
              title-style="text-align:left;" />
    <van-row>
      <van-col span="6">
        <div class="hl-order">
          <div class="hl-icon">
            <van-icon name="close" />
          </div>
          <div class="hl-span">待付款</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="hl-order">
          <div class="hl-icon">
            <van-icon name="close" />
          </div>
          <div class="hl-span">待付款</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="hl-order">
          <div class="hl-icon">
            <van-icon name="close" />
          </div>
          <div class="hl-span">待付款</div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="hl-order">
          <div class="hl-icon">
            <van-icon name="close" />
          </div>
          <div class="hl-span">待付款</div>
        </div>
      </van-col>
    </van-row>
    <tabbarPage state="3"></tabbarPage>
  </div>
</template>

<script>
import tabbarPage from '@/components/tabbarPage.vue'
export default {
  components: {
    tabbarPage
  },
  data () {
    return {
      msg: '用户'
    }
  },
  methods: {
    goOrderDetails (orderTypeId) {
      this.$router.push({
        path: '/orderIndex',
        query: {
          orderTypeId: orderTypeId
        }
      })
    }
  }
}
</script>

<style lang="less">
.hl-order {
  padding: 10px 0 5px 0;
  text-align: center;
  .hl-icon {
    font-size: 20px;
  }
  .hl-span {
    font-size: 13px;
  }
}
</style>
