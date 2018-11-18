// This is the webpack config used for unit tests.

const merge = require('webpack-merge')
//lss modify 2018111819.06
const baseConfig = require('./base.conf')

//wtw->modify2018111819.06
module.exports = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map'
})

