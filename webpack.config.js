// eslint-disable-next-line @typescript-eslint/no-var-requires
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      // for moti 0.19+, you can remove @motify here
      babel: { dangerouslyAddModulePathsToTranspile: ['moti', '@motify'] },
    },
    argv
  )

  config.resolve.alias['framer-motion'] = 'framer-motion/dist/framer-motion'

  return config
}
