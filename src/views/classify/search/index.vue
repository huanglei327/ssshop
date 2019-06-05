<template>
  <div class="search-content">
    <van-search v-model="values"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch">
      <div slot="action"
           @click="onSearch">搜索</div>
    </van-search>
    <div class="search-main">
      <div class="left">历史搜索</div>
      <div class="right"
           @click="delList">清空</div>
    </div>
    <div v-if="searchValues.length>0"
         class="se-list">
      <div v-for="(item,index) in searchValues"
           :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data () {
    return {
      msg: "123",
      values: ""
    };
  },
  computed: {
    ...mapState({
      searchValues: state => state.searchValues
    })
  },
  created () {
    this.values = ''
    console.log(this.searchValues)
  },
  methods: {
    onSearch () {
      console.log(this.values)
      if (this.values !== '') {
        this.$store.commit("UpSearchs", this.values)
        this.values = ''
      }
    },
    onChange (event) {
      this.values = event.mp.detail;
    },
    onclick () {
      // this.$store.commit("saveSearchValues", this.values)
      //wx.redirectTo({ url: '/pages/commodity/index/main?keyword=' + this.values })
    },
    delList () {
      this.$store.commit("DelSearchs");
    }
  }
};
</script>

<style lang="less">
.s-search {
  width: 100%;
}

.search-content {
  width: 100%;
  background: white;
  .search-main {
    display: flex;
    width: 100%;
    .left {
      flex: 1;
    }
    .right {
      width: 40px;
    }
  }
  .se-list {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    flex-direction: row;
    div {
      padding: 4px 6px;
      padding: 8rpx 12rpx;
      background: #f5f5f5;
      margin-right: 10px;
      margin-top: 10px;
      border-radius: 2px;
    }
  }
}
</style>
