const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: '../src/main/resources/static/vue', // 빌드한 파일이 위치 할 경로
  devServer: {
    port: 8081,
//    proxy: 'http://localhost:8080' // Back-end spring boot 서버 주소
  },
  lintOnSave: false
})
