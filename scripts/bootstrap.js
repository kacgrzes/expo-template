/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const prompt = require('prompt-sync')()

const { logger, addAfter } = require('./utils')

const paths = {
  appJson: './app.json',
  appConfig: './app.config.ts',
  readme: './README.md',
  readmeTemplate: './templates/readme_template.md',
  pullRequestTemplate: './.github/pull_request_template.md',
  newPullReuestTemplate: './templates/pull_request_template.md',
}

// 1.
const replaceReadme = (appName, organizationOwner) => {
  let contents = fs.readFileSync(paths.readmeTemplate, 'utf8')
  contents = contents.replaceAll('_NAME_', appName)
  contents = contents.replaceAll('_OWNER_', organizationOwner)

  fs.writeFileSync(paths.readme, contents)
}

// 2.
const setUpAppConfig = (appName, bundleId, androidPackageName, scheme, easId, androidIconColor) => {
  let contents = fs.readFileSync(paths.appConfig, 'utf8')

  const appConfig = `
export const APP_CONFIG = {
  androidPackageName: '${androidPackageName}', // CONFIG: Add your android package name here
  appName: '${appName}', // CONFIG: Add your app name here
  easProjectId: '${easId}', // CONFIG: Add your eas project ID here
  iosBundleIdentifier: '${bundleId}', // CONFIG: Add your ios bundle identifier here
  scheme: '${scheme}', // CONFIG: Add your url scheme to link to your app
  adaptiveIconBackgroundColor: '${androidIconColor}', // CONFIG: Add your url scheme to link to your app
} as const
`

  contents = contents.replace(/(\/\/ APP_CONFIG_START)[\s\S]*?(\/\/ APP_CONFIG_END)/g, '$1$2')

  contents = addAfter(contents, '// APP_CONFIG_START', `${appConfig}`)
  fs.writeFileSync(paths.appConfig, contents)
}

// 3.
const replatePullRequestTemplate = () => {
  const contents = fs.readFileSync(paths.newPullReuestTemplate, 'utf8')

  fs.writeFileSync(paths.pullRequestTemplate, contents)
}

// 4.
const changeAppJson = (appName, appSlug, organizationOwner) => {
  const newAppJson = JSON.parse(fs.readFileSync(paths.appJson, 'utf8'))
  newAppJson.expo.slug = appSlug
  newAppJson.expo.name = appName
  newAppJson.expo.owner = organizationOwner
  newAppJson.version = '1.0.0'
  fs.writeFileSync(paths.appJson, JSON.stringify(newAppJson, null, 2))
}

// 5.
const changePackageJson = (appName, organizationOwner) => {
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
  packageJson.name = `@${organizationOwner}/${appName}`
  packageJson.description = `App created from expo-template powered by binarapps`
  packageJson.version = '1.0.0'

  delete packageJson.repository
  delete packageJson.bugs
  delete packageJson.keywords

  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))
}

// 6.
const removeIssueTemplates = () => {
  fs.rm('./.github/ISSUE_TEMPLATE', { recursive: true, force: true }, () => {})
}

const setUpProject = async (
  appName,
  bundleId,
  androidPackageName,
  scheme,
  easId,
  organizationOwner,
  androidIconColor,
  appSlug
) => {
  // START
  logger.success('Start ...')

  // 1. Delete readme -> and create new, with new app name etc.
  logger.info('Generating new readme file')
  replaceReadme(appName, organizationOwner)

  // 2. Replace appName, bundleId, androidPackageName,scheme and easProjectId in app.config.ts file
  logger.info('Change project variables in app.config.ts file')
  setUpAppConfig(appName, bundleId, androidPackageName, scheme, easId, androidIconColor)

  // 3. Delete exist pull request template -> generate the new
  logger.info('Generating new pull request template file')
  replatePullRequestTemplate()

  // 4. Change app.json file
  logger.info('Change app.json file')
  changeAppJson(appName, appSlug, organizationOwner)

  // 5. Change package.json file
  logger.info('Change package.json file')
  changePackageJson(appName, organizationOwner)

  // 6. Remove issue templates
  logger.info('Remove issue templates')
  removeIssueTemplates()

  //Finish
  logger.success(`Config your project has been success`)
}

const bootstrap = () => {
  logger.info('Please give me this information to setup your project:')
  const appName = prompt('App name: ')
  if (!appName) {
    return logger.error('Please write correct app name')
  }

  const appSlug = prompt('App slug (from expo dashboard): ')
  if (!appSlug) {
    return logger.error('Please write app slug')
  }

  const organizationOwner = prompt('Organization owner (from expo dashboard): ')
  if (!organizationOwner) {
    return logger.error('Please write organziation owner')
  }

  const easId = prompt('EAS project ID (from expo dashboard): ')
  if (!easId) {
    return logger.error('Please write correct eas project ID')
  }

  const androidIconColor =
    prompt('Android adaptive icon color (you can leave it empty and fill it later): ') ||
    '#2E7AF0CC'

  const bundleId = prompt('Bundle ID (ios): ')
  if (!bundleId) {
    return logger.error('Please write correct bundle ID')
  }

  const androidPackageName = prompt('Package name (android): ')
  if (!androidPackageName) {
    return logger.error('Please write correct android package name')
  }

  const scheme = prompt('URL scheme (for deeplinking): ')
  if (!scheme) {
    return logger.error('Please write correct scheme')
  }

  // 1. Setup project -> set ( appName, bundleId, androidPackageName, appScheme, easProjectId, organizationOwner, androidIconColor )
  setUpProject(
    appName,
    bundleId,
    androidPackageName,
    scheme,
    easId,
    organizationOwner,
    androidIconColor,
    appSlug
  )

  logger.info(
    '\nYou can also add images right now, go to assets folder and replace images to match your app \n'
  )
  logger.info('\nPlease verify the changes made by this script and commit it to your repository \n')
}

bootstrap()

// INSTRUCTION:
// 1. Delete readme and write the new one
// 2. Setup app.config.ts file
// 3. Setup pull_request_template.md
// 4. Setup app.json file
// 5. Setup package.json file
// 6. Remove issue templates
