module.exports = {
  publicPath: '', //enable relative path resources
  transpileDependencies: [
    'vuetify',
    'vuex-module-decorators',
    'vuex-persist'
  ],
  css: {
    extract: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload')
  }
}
