

import { get, post, post2 } from './fetch.js'

 //首页轮播图
export function getSwipetInfoApi(param){
  const apiName='api/index/ad'
  return post(apiName,param)
}
