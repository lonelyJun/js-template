// vue.config.js
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "/yinxun" : "./",
  //代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://edit.xinhua-news.cn:8888',
        changeOrigin: true,
        pathRewrite: {}
      }
    }
  },
  //修改favicon，请同时把public里的也做更换
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}