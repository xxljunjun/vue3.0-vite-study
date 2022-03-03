module.exports = {
  lintOnSave:false,  //关闭语法检查
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}

// const path = require('path')

// module.exports = {
//   pluginOptions: {
//     'style-resources-loader': {
//       preProcessor: 'less',
//       patterns: [
//         path.resolve(__dirname, './src/assets/style/*.less')
//       ]
//     }
//   }
// }