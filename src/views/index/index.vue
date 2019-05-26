<template>
  <div>
    <div class="home-swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in adList" :key="index">
          <img :src="item.imageUrl" class="slide-image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <tabbarPage state="0"></tabbarPage>
  </div>
</template>
<script src="./index.js"/>

<style lang="less">
.home-swiper {
  width: 100%;
  height: 200px;
  .slide-image {
    height: 200px;
    width: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
