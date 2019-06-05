<template>
  <div>

    <div class="left">
      <div v-for="(item,index) in list"
           :key="index"
           @click="bindActive(index)"
           :class="active=== index ?'active' :''">
        {{item.name}}
      </div>
    </div>
    <div class="right">
      <div v-for="(item,index) in list"
           :key="index"
           v-show="active === index"
           class="typeTree">
        <div class="heand"
             v-show="item.prettyBannerUrl">
          <img :src="item.prettyBannerUrl"
               width="100%"
               height="200" />
        </div>
        <div v-for="(c,indexc) in item.subCategoryList"
             :key="indexc"
             class="category">
          <div class="brand">
            <router-link :to="{path:'/commodityList',query:{categoryId:c.id}}">
              <div class="item">
                <img :src="c.prettyBannerUrl" />
                <div>{{c.name}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <tabbarPage state="1"></tabbarPage>
  </div>
</template>

<script>
import tabbarPage from '@/components/tabbarPage.vue'
import { GetClassIfyInfoApi } from '@/utils/httpUtils/api.js'
export default {
  components: {
    tabbarPage
  },
  data () {
    return {
      msg: '分类',
      active: 0,
      list: []
    }
  },
  created () {
    this.GetClassIfyInfo()
  },
  methods: {
    bindActive (index) {
      this.active = index
    },
    GetClassIfyInfo () {
      const param = {}
      const c = res => {
        console.log(res)
        this.list = res.data.categoryList
      }
      GetClassIfyInfoApi(param).then(c)
    }
  }
}
</script>


<style lang="less">
.left {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 90px;
  background: #f6f6f6;
  text-align: center;
  overflow: auto;
  font-size: 14px;
}
.left::before {
  content: "";
  position: absolute;
  background: #dcdcdc;
  right: 0;
  top: 0;
  height: 100%;
}
.left div.active {
  background: #fff;
  position: relative;
  z-index: 2;
  border-left: 3px solid #fa6d87;
  font-size: 16px;
}
.left div {
  display: block;
  height: 45px;
  line-height: 45px;
  border-bottom: 0px solid #dcdcdc;
  border-left: 3px solid #f6f6f6;
}
.right {
  margin-left: 90px;
  height: 100%;
  overflow: auto;
  width: auto;
  background: #fff;
  padding: 0 10px;
}
.right text {
  font-size: 12px;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  } /*初始状态 透明度为0*/
  40% {
    opacity: 0;
  } /*过渡状态 透明度为0*/
  100% {
    opacity: 1;
  } /*结束状态 透明度为1*/
}
@-webkit-keyframes fade-in {
  /*针对webkit内核*/
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.typeTree {
  padding-top: 10px;
  width: 100%;
  animation: fade-in; /*动画名称*/
  animation-duration: 0.5s; /*动画持续时间*/
  -webkit-animation: fade-in 0.5s; /*针对webkit内核*/
  .title {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #999;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 30px;
    padding-top: 10px;
  }
  .heand {
    img {
      width: 100%;
      height: 100px;
    }
  }
}
.typeTree .item {
  text-align: center;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}
.typeTree .brand {
  width: 33%;
  float: left;
  text-align: center;
  height: 90px;
  padding: 5px 0;
}

.search-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #fff;
  background: white;
  border-bottom: 1px solid #efefef;
  font-size: 32rpx;
}
.search {
  flex-grow: 1;
  margin: 7px 12px;
}
.item img {
  width: 60px;
  height: 60px;
}
</style>
