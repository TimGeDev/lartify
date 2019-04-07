// vue.config.js
module.exports = {
  outputDir: '../public',
  css: {
    sourceMap: true
  },
  devServer: {
    proxy: 'http://lartify.ddev.local'
  },
  indexPath: process.env.NODE_ENV === 'production'
      ? '../resources/views/index.blade.php'
      : 'index.html'
};