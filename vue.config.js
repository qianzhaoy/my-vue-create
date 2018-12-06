module.exports = {
  devServer: {
    port: 6060
    // proxy: {
    //   "/v1": {
    //     target: "proxy url",
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    loaderOptions: {
      css: {
        extract: true
      },
      less: {
        modifyVars: {
          "button-primary-background-color": "#1989fa"
        }
      }
    }
  }
};
