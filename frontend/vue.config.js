const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../src/main/resources/static/vue',
  devServer: {
    port: 8081,
    proxy: 'http://localhost:8080'
  }
})
