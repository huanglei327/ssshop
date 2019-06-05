<template>
  <div style="padding:0 5px;">
    <div class="d-swiper"
         v-show="false">
      <van-swipe class="swiper"
                 indicator-dots="true">
        <div v-for="(item, index) in list.gallery"
             :index="index"
             :key="index">
          <van-swipe-item>
            <img :src="item.imgUrl"
                 class="d-img"
                 lazy-load="true" />
          </van-swipe-item>
        </div>
      </van-swipe>
    </div>
    <div class="dt-main">
      <div class="dt-name"
           v-show="false">
        <div class="left">
          <div class="title">{{goodsInfo.name}}</div>
          <div class="remark">{{goodsInfo.goodsBrief}}</div>
        </div>
        <!-- <div>分享</div> -->
      </div>
      <div class="dt-price"
           v-show="false">
        <span class="dx-4 price-color">￥</span>
        <span class="dt-p price-color">{{goodsInfo.retailPrice}}</span>&nbsp;&nbsp;&nbsp;
        <span class="dt-x">￥{{goodsInfo.marketPrice}}</span>
      </div>
    </div>
    <div class="d-space"></div>
    <div class="title-name">
      <van-cell is-link>
        <div slot="title">
          <span class="van-cell-text">{{specificationList | FSpecification}}</span>
        </div>
      </van-cell>
    </div>
    <div class="d-space"></div>
    <div>
      <div class="detais-image"
           v-html="goodsInfo.goodsDesc"></div>
    </div>
  </div>
</template>

<script>
import { GetGoodsDetailsApi } from '@/utils/httpUtils/api.js'
export default {
  data () {
    return {
      goodId: '',
      goodsInfo: [],
      list: [],
      specificationList: []
    }
  },
  created () {
    this.goodId = this.$route.query.goodId
    this.GetGoodsDetails()
  },
  filters: {
    FSpecification (values) {
      let names = ''
      for (let item of values) {
        names += item.name
      }
      return names
    }
  },
  methods: {
    GetGoodsDetails () {
      const c = res => {
        console.log(res)
        this.list = res.data
        this.goodsInfo = res.data.goodsInfo
        this.specificationList = res.data.specificationList
      }
      const param = {
        goodsId: this.goodId
      }
      GetGoodsDetailsApi(param).then(c)
    }
  }
}
</script>

<style lang="less">
.detais-image {
  width: 100%;
  p {
    margin: 0;
    padding: 0;
    img {
      max-width: 100%;
      vertical-align: bottom;
    }
  }
}
.d-swiper {
  width: 100%;
  .swiper {
    height: 250px;
    .d-img {
      width: 100%;
      display: block;
      height: 250px;
      object-fit: convert;
    }
  }
}
.dt-main {
  width: 100%;
  background: white;
  .dt-name {
    display: flex;
    padding: 0 10px;
    margin-top: 10px;
    .left {
      width: 80%;
      div {
        height: 25px;
        line-height: 25px;
      }
      .title {
        font-weight: 600;
      }
      .remark {
        color: #aaa;
        font-size: 12px;
      }
    }
  }
  .dt-price {
    display: flex;
    padding: 0 30rpx;
    height: 30px;
    line-height: 30px;
    .dx-4 {
    }
    .dt-p {
      font-size: 20px;
      font-weight: 600;
    }
    .dt-x {
      text-decoration: line-through;
    }
  }
}
</style>
 