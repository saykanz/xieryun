module.exports= {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views',
      }
    }
  },
  devServer: {
    proxy: {
      '/api/': {
        target: 'https://www.cei.net.cn/cei', // 你请求的第三方接口
        changeOrigin: true, /* 在本地会创建一个虚拟服务端，然后发送请求的数据，
        并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题 */
        ws: true,
        pathRewrite: {  // 路径重写，
          /* 替换target中的请求地址，也就是说以后你在请求
          http://127.0.0.1:8888/api/private/v1/这个地址的时候直接写成/api/即可。 */
          '^/api/': ''
        }
      }
    },
  }
}