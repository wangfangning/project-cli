const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 环境路径配置
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
      .set('page', resolve('src/page'))
      .set('api', resolve('src/assets/api/'))
      .set('config', resolve('@/config'))
  },
  devServer: {
    port: 8010,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
