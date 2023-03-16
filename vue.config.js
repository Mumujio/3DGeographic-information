const { defineConfig } = require('@vue/cli-service')
// const px2rem = require('postcss-px2rem')

// const postcss = px2rem({
//   remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
// })
module.exports = defineConfig({
  transpileDependencies: true,

  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         postcss
  //       ]
  //     }
  //   }
  // }
  // module: {
  //   rules: [
  //     // Shaders
  //     {
  //       test: /\.(glsl|vs|fs|vert|frag)$/,
  //       exclude: /node_modules/,
  //       use: [
  //         'raw-loader'
  //       ]
  //     }
  //   ]
  // }
})
