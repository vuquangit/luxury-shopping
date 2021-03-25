/* eslint-disable no-console */
const withOptimizedImages = require('next-optimized-images')
const flow = require('lodash/flow')
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_EXPORT,
} = require('next/constants')
const {
  WebpackBundleSizeAnalyzerPlugin,
} = require('webpack-bundle-size-analyzer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withEnv = (config = {}) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = config.phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd =
    config.phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    config.phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  // when `next export or `npm run export is used
  const isExport = config.phase === PHASE_EXPORT

  console.log(
    `isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}  isExport:${isExport}`
  )

  const env = {}
  config.env = {
    ...config.env,
    ...env,
  }

  return config
}

const nextConfig = (phase, { defaultConfig }) =>
  flow(
    withEnv,
    withOptimizedImages,
    withBundleAnalyzer
  )({
    ...defaultConfig,
    env: {
      PORT: process.env.PORT,
    },
    compress: false,
    webpack: (config, { webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      config.module.rules.push({
        test: /\.spec.tsx$/,
        loader: 'ignore-loader',
      })

      if (process.env.ANALYZE) {
        config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
      }

      return config
    },
    webpackDevMiddleware: (config) => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    },
    phase,
    optimizeImages: false,
    experimental: { scss: true },
    exportPathMap: async function (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      defaultPathMap,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/404': { page: '/404' },
        '/about': { page: '/about' },
        '/art-of-living': { page: '/art-of-living' },
        '/art-of-living/[...all]': { page: '/art-of-living/[...all]' },
        '/magazine': { page: '/magazine' },
        '/men': { page: '/men' },
        '/men/[...all]': { page: '/men/[...all]' },
        '/new': { page: '/new' },
        '/new/[...all]': { page: '/new/[...all]' },
        '/products': { page: '/products' },
        '/women': { page: '/women' },
        '/women/[...all]': { page: '/women/[...all]' },
      }
    },
  })

module.exports = nextConfig
