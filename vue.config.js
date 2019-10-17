const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  /*
    Vue-cli3:
    Crashed when using Webpack `import()` #2463
    https://github.com/vuejs/vue-cli/issues/2463

   */
  /*
  pages: {
    index: {
      entry: 'src/main.js',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  */
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/yourProjectName/'
  //   : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@images', resolve('src/images'))
      .set('@cmp', resolve('src/components'))
      .set('@views', resolve('src/views'))
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `
  //         @import "@/assets/css/mixin.scss";
  //       `
  //     }
  //   }
  // },
  devServer: {
    port: 8080,
    proxy: {
      '/singleMuseum': {
        target: 'http://dev.tj720.com', // 内测环境
        // target: 'http://192.168.5.198:8888', // 谢少雄
        ws: false,
        changeOrigin: true
      }
    }
  },

  lintOnSave: undefined
}
