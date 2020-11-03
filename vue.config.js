// eslint-disable-next-line
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
// eslint-disable-next-line
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  chainWebpack(config) {
    config.plugin('monaco').use(new MonacoWebpackPlugin())
    config.plugin('circular').use(new CircularDependencyPlugin())
  }
}
