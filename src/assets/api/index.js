/**
 * @file API 入口
 */
import apiList from './url'
import apiFactory from './factory'

const Api = {}

Object.keys(apiList).forEach(key => {
  Api[key] = apiFactory(apiList[key])
})

export * from './constant'
export default Api
