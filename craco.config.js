module.exports = {
  webpack: {
    loaderOptions: (webpackConfig, { env, paths }) => {
      return webpackConfig
    },
  },
  babel: {
    loaderOptions: (babelConfig, { env, paths }) => {
      return babelConfig
    },
  },
}
