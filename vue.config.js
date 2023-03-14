const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
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
