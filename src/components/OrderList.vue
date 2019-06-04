<template>
  <div style="background:white;">
    <div class="order-List">
      <div class="header">
        <div class="left">订单编号:13131239092342432</div>
        <div class="right">待付款</div>
      </div>
      <div class="content van-hairline--top-bottom">
        <div class="left"><img class="l-img"
               src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3024049172,1462695921&fm=26&gp=0.jpg" /></div>
        <div class="middle">
          <div class="middle-list minheight40">
            <div class="m-left">轻奢纯棉水洗四件套</div>
            <div class="m-right">￥899</div>
          </div>
          <div class="middle-list siziColorf5">
            <div class="m-left">浅粉</div>
            <div class="m-right">x1</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="left">应付：899</div>
        <div class="right">
          <div>
            <van-button type="default"
                        size="small">取消订单</van-button>
            <van-button type="warning"
                        size="small">付款</van-button>
            <!-- <van-button type="default"
                        size="small">查看物流</van-button>
            <van-button type="primary"
                        size="warning">退款</van-button>
            <van-button type="primary"
                        size="small">确认收货</van-button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderList: []
  }
}
</script>

<style lang="less" >
.minheight40 {
  min-height: 40px;
}
.order-List {
  margin: 10px 0;
  padding: 0 10px;
  font-size: 14px;
  .header {
    display: flex;
    padding: 10px 0;
    .left {
      width: 80%;
      text-align: left;
    }
    .right {
      flex: 1;
      text-align: right;
    }
  }
  .content {
    display: flex;
    min-height: 80px;
    .left {
      width: 60px;
      padding: 10px 0;
      .l-img {
        width: 60px;
        height: 60px;
      }
    }
    .middle {
      flex: 1;
      padding: 10px 0 10px 10px;
      .middle-list {
        display: flex;
        .m-left {
          width: 80%;
        }
        .m-right {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
  .footer {
    display: flex;
    padding: 10px 0;
    .left {
      width: 50%;
      text-align: left;
    }
    .right {
      width: 50%;
      text-align: right;
    }
  }
}
</style>

