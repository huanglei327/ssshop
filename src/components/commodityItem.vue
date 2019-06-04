<template>
  <div>
    <div class="c-main">
      <div class="c-content"
           v-for="(item,index) in items"
           :key="index">

        <div class="c-single"
             @click="GoDetails(item)">
          <div class="c-img">
            <img :src="item.listPicUrl"
                 mode="scaleToFill"
                 lazy-load="true"
                 class="itemimg" />
          </div>
          <div class="c-name">{{item.name}}</div>
          <div class="c-price">￥{{item.retailPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"]
}
</script>
<style lang="less">
.c-main {
  width: 100%;
  .c-content {
    float: left;
    width: 50%;
    .c-single {
      padding: 5px;
      .c-img {
        background: #f5f5f5;
        width: 100%;
        .itemimg {
          width: 100%;
          height: 150px;
        }
      }
      .c-name {
        height: 25px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .c-price {
        height: 25px;
        line-height: 25px;
        font-weight: 600;
      }
    }
  }
}
</style>

