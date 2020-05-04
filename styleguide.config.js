const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Demo Style Guide',
  components: 'src/**/*.vue', // 组件的目录
  defaultExample: false, // 是否使用默认样例
  usageMode: 'expand', // 是否展开用法
  exampleMode: 'expand', // 是否展开示例代码
  styleguideDir: 'dist_docs', // 打包的目录
  codeSplit: true, // 打包时是否进行分片
  skipComponentsWithoutExample: true, // 是否跳过没有样例的组件
  // 组件示例路径
  getExampleFilename (componentPath) {
    return path.join(__dirname, 'docs/', path.basename(componentPath).replace(/\.vue?$/, '.md'))
  },
  compilerConfig: {
    transforms: {
      // to make async/await work by default (no transformation)
      asyncAwait: false,
    },
  },
  // 引入第三方插件
  require: [path.join(__dirname, 'styleguide/global.requires.js')]
}
