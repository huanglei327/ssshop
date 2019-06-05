

import { get, post, post2 } from './fetch.js'

//首页轮播图
export function getSwipetInfoApi (param) {
  const apiName = 'api/index/ad'
  return post(apiName, param)
}
//分类查询
export function GetClassIfyInfoApi (param) {
  const apiName = '/api/category/list'
  return post(apiName, param)
}
//获取商品列表
export function GetGoodsListApi (param) {
  const apiName = 'api/goods/list'
  return post(apiName, param)
}
//获取商品详情
export function GetGoodsDetailsApi (param) {
  const apiName = 'api/goods/detail'
  return post(apiName, param)
}

//获取推荐
export function GetRecommendApi (param) {
  const apiName = 'api/index/showForU'
  return post(apiName, param)
}