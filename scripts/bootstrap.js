/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const prompt = require('prompt-sync')()

const { addBefore, deleteText, logger } = require('./utils')

const paths = {
  appConfig: './app.config.ts',
  readme: './README.md',
  readmeTemplate: './scripts/templates/readme_template.md',
  pullRequestTemplate: './.github/pull_request_template.md',
  newPullReuestTemplate: './scripts/templates/pull_request_template.md',
}

// 1.
const replaceReadme = (appName) => {
  let contents = fs.readFileSync(paths.readmeTemplate, 'utf8')
  contents = contents.replaceAll('_NAME_', appName)

  fs.writeFileSync(paths.readme, contents)
}

// 2.
const setUpAppConfig = (appName, bundleId, androidPackageName, scheme, easId) => {
  let contents = fs.readFileSync(paths.appConfig, 'utf8')
  contents = deleteText(contents, "'your_android_package_name',")
  contents = deleteText(contents, "'your.ios.bundle.identifier',")
  contents = deleteText(contents, "'ac562c27-4a4e-4532-869f-fe6f9447bee6',")
  contents = deleteText(contents, "'Template',")
  contents = deleteText(contents, "'your_url_scheme',")

  contents = addBefore(
    contents,
    '// CONFIG: Add your android package name',
    `'${androidPackageName}',`
  )
  contents = addBefore(contents, '// CONFIG: Add your app name', `'${appName}',`)
  contents = addBefore(contents, '// CONFIG: Add your eas project ID', `'${easId}',`)
  contents = addBefore(contents, '// CONFIG: Add your ios bundle identifier', `'${bundleId}',`)
  contents = addBefore(contents, '// CONFIG: Add your url scheme', `'${scheme}',`)
  fs.writeFileSync(paths.appConfig, contents)
}

// 3.
const replatePullRequestTemplate = () => {
  const contents = fs.readFileSync(paths.newPullReuestTemplate, 'utf8')

  fs.writeFileSync(paths.pullRequestTemplate, contents)
}

const setUpProject = (appName, bundleId, androidPackageName, scheme, easId) => {
  // START
  logger.success('Start ...')

  logger.info('Generating new readme file')
  // 1. Delete readme -> and create new, with new app name etc.
  replaceReadme(appName)

  logger.info('Change project variables in app.config.ts file')
  // 2. Replace appName, bundleId, androidPackageName,scheme and easProjectId in app.config.ts file
  setUpAppConfig(appName, bundleId, androidPackageName, scheme, easId)

  logger.info('Generating new pull request template file')
  // 3. Delete exist pull request template -> generate the new
  replatePullRequestTemplate()

  //Finish
  logger.success(`Config your project has been success`)
}

const bootstrap = () => {
  const appName = prompt('Write your app name: ')
  if (!appName) {
    return logger.error('Please write correct app name')
  }

  const appSlug = prompt('Write your app slug: ')
  if (!appSlug) {
    return logger.error('Please write correct app slug')
  }

  const organizationOwner = prompt('Write your organization owner: ')
  if (!organizationOwner) {
    return logger.error('Please write correct organization owner')
  }

  const easId = prompt('Write your eas project ID: ')
  if (!easId) {
    return logger.error('Please write correct eas project ID')
  }

  const bundleId = prompt('Write your bundle ID: ')
  if (!bundleId) {
    return logger.error('Please write correct bundle ID')
  }

  const androidPackageName = prompt('Write your android package name: ')
  if (!androidPackageName) {
    return logger.error('Please write correct android package name')
  }

  const scheme = prompt('Write your scheme: ')
  if (!scheme) {
    return logger.error('Please write correct scheme')
  }
  // 1. Setup project -> set ( appName, bundleId, androidPackageName, appScheme, easProjectId )
  setUpProject(appName, bundleId, androidPackageName, scheme, easId)

  logger.info(
    '\nYou can also add images right now, go to assets folder and replace images to match your app \n'
  )
}

bootstrap()

// INSTRUCTION:
// 1. Delete readme and write the new one
// 2. Setup app.config.ts file
// 3. Setup pull_request_template.md
