module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      // 配置代理 希望拦截当前的host地址 替换为目标地址
      "/api": {
        target: `http://www.bufantec.com`,
        changeOrigin: true, // 如果是跨域 需要添加
        pathRewrite: {
          // ['/admin']: '/abc'   /admin/xx/xx ==> /abc/xx/xx
        }
      }
    }
  }
};
