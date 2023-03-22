/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const prompt = require('prompt-sync')()
const selectPrompt = require('select-prompt')

const { addAfter, addBefore, execPromise, logger } = require('./utils')

const enumsFileSrc = './src/navigation/config/enums.ts'
const screensFileSrc = './src/navigation/config/screens.ts'
const typesFileSrc = './src/navigation/config/navigation.d.ts'
const screensIndexFileSrc = './src/screens/index.ts'

/**
 * @typedef {{
 *     "tabs",
 *     "tabs_new",
 *     "root",
 * }} TYPES
 */

const createScreenFile = (name) => {
  const screenContent = `import { Button, Center, Text } from 'native-base'

import { useCallback, useTranslation } from '~hooks'

export const ${name}Screen = (props: ${name}ScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { t } = useTranslation()

  const navigateToDetails = useCallback(() => {
    navigate('Home')
  }, [navigate])

  return (
    <Center flex={1}>
      <Text textAlign="center">${name}</Text>
      <Text textAlign="center">{t('hello')}</Text>
      <Button mt={4} onPress={navigateToDetails}>
        {t('home_screen.details')}
      </Button>
    </Center>
  )
}
`

  fs.writeFileSync(`./src/screens/${name}.tsx`, screenContent)
}

/**
 * @param {string} name
 * @param {Object} screenType
 * @param {string} screenType.value
 * @param {keyof TYPES} screenType.type
 */
const addToEnums = (name, screenType) => {
  const enumsFile = require('./temp/enums')
  const contents = fs.readFileSync(enumsFileSrc, 'utf8')

  const StackScreens =
    screenType.type === 'root' ? 'RootStackScreens' : screenType.value + 'Screens'

  // LOGIC WHEN ADDING NEW TAB
  if (screenType.type === 'tabs_new') {
    const bottomTabToAdd = `
  ${StackScreens}: '${StackScreens}',`
    let newContents = addAfter(contents, 'export const BottomTabsScreens = {', bottomTabToAdd)

    const enumToAdd = `// ${StackScreens}_SCREENS
export const ${StackScreens} = {
  ${name}: '${name}',
} as const

`
    newContents = addBefore(newContents, '// ExamplesStack_SCREENS', enumToAdd)

    fs.writeFileSync(enumsFileSrc, newContents)
    return
  }

  // LOGIC WHEN ADDING ONLY NEW SCREEN - ROOT STACK AND BOTTOM TABS
  const startIdx = contents.indexOf(`export const ${StackScreens} = {`)

  const endIdxString = '} as const'
  const endIdx = contents.indexOf(endIdxString, startIdx) + endIdxString.length

  const rootStackScreensData = enumsFile[StackScreens]

  rootStackScreensData[name] = name

  // Convert the updated object back to a string
  const updatedRootStackScreensDataStr = `export const ${StackScreens} = ${JSON.stringify(
    rootStackScreensData,
    null,
    2
  )} as const`

  // Write the updated contents back to the file
  fs.writeFileSync(
    enumsFileSrc,
    contents.substring(0, startIdx) + updatedRootStackScreensDataStr + contents.substring(endIdx)
  )
}

/**
 * @param {string} name
 * @param {Object} screenType
 * @param {string} screenType.value
 * @param {keyof TYPES} screenType.type
 */
const addToScreens = (name, screenType) => {
  const screenNameType = screenType.type === 'root' ? 'RootStack' : screenType.value
  const newScreen = `
    {
      name: ${screenNameType}Screens.${name},
      component: ${name}Screen,
      // TODO: Add translation here
      options: { title: '${name}' },
      deeplink: '/${name.toLowerCase()}',
    },`

  let contents = fs.readFileSync(screensFileSrc, 'utf8')
  let typeToSearch = '  authorized: ['
  if (screenType.type === 'root') {
    typeToSearch.replace('authorized', screenType.value)
    contents = addAfter(contents, typeToSearch, newScreen)
  } else if (screenType.type === 'tabs') {
    typeToSearch = `] // ${screenType.value}_SCREENS_END`
    console.log({ typeToSearch })
    contents = addBefore(contents, typeToSearch, newScreen)
  }

  contents = addBefore(
    contents,
    "} from '~screens'",
    `  ${name}Screen,
`
  )

  fs.writeFileSync(screensFileSrc, contents)
}

const addToTypes = (name) => {
  const newAuthorizedScreen = `
    ${name}: undefined`

  let contents = fs.readFileSync(typesFileSrc, 'utf8')
  contents = addAfter(contents, '    // Root_unauthorized', newAuthorizedScreen)
  contents = addAfter(
    contents,
    '  // RootStack_SCREENS',
    `
  type ${name}ScreenProps = ScreenComposite<'${name}'>`
  )

  fs.writeFileSync(typesFileSrc, contents)
}

const addToIndex = (name) => {
  const newExport = `
export * from './${name}'
`

  const contents = fs.readFileSync(screensIndexFileSrc, 'utf8')

  fs.writeFileSync(screensIndexFileSrc, contents + newExport)
}

/**
 * @param {string} name
 * @param {Object} screenType
 * @param {string} screenType.value
 * @param {keyof TYPES} screenType.type
 */
const generateScreen = async (name, screenType) => {
  console.log({ name, screenType })

  // GENERATE SCREEN FILE
  logger.info('Generating screen files')
  createScreenFile(name)

  // ADD SCREEN TO INDEX
  addToIndex(name)

  // ADD SCREEN TO ENUMS
  addToEnums(name, screenType)

  // ADD SCREEN TO SCREENS
  addToScreens(name, screenType)

  // ADD SCREEN TO TYPES
  addToTypes(name)

  // Remove temp files
  logger.info('Removing temp files')
  // await execPromise('rm -rf ./scripts/temp')

  // Make sure everything went well
  logger.info('Checking code - lint and typescript')
  await execPromise('yarn eslint src --fix && yarn tsc')

  // FISNISH
  logger.success(`Screen ${name} created successfully`)
}

const generateNewScreen = async () => {
  logger.info('Creating temp files files')
  await execPromise(`yarn tsc ${enumsFileSrc} --outDir ./scripts/temp --skipLibCheck`)

  const rootVsBottomTabs = [
    { title: 'Root stack', value: 'root' },
    { title: 'Bottom tabs', value: 'tabs' },
  ]

  const rootScreenTypes = [
    { title: 'Authorized', value: 'authorized' },
    { title: 'Not authorized', value: 'notAuthorized' },
    { title: 'Modal', value: 'modal' },
    { title: 'Normal - authorized and not authorized', value: 'normal' },
  ]

  const enumsFile = require('./temp/enums')
  // generateScreen('XD', { type: 'tabs_new', value: 'SettingsStack' })
  // return

  const bottomTabsScreens = Object.keys(enumsFile.BottomTabsScreens)
  const bottomTabsTypes = bottomTabsScreens
    .map((tab) => ({ title: tab, value: tab }))
    .concat({ title: 'New tab', value: '_new' })

  selectPrompt('Do you want this screen on root stack or on bottom tabs?', rootVsBottomTabs, {
    cursor: 0,
  }).on('submit', async (stackType) => {
    if (stackType === 'root') {
      selectPrompt('Select what type is this screen', rootScreenTypes, {
        cursor: 1,
      }).on('submit', async (screenType) => {
        const name = prompt('What is screen name? ')
        if (!name) {
          return logger.error('No screen name passed')
        }
        generateScreen(name, { type: 'root', value: screenType })
      })
    }

    if (stackType === 'tabs') {
      selectPrompt('Select what type is this screen', bottomTabsTypes, {
        cursor: 1,
      }).on('submit', async (screenType) => {
        const name = prompt('What is screen name? ')
        if (!name) {
          return console.log('No screen name passed')
        }

        // Logic when adding new tab
        if (screenType === '_new') {
          const bottomTabName = prompt('What is bottom tab name? ')
          generateScreen(name, { type: 'tabs_new', value: bottomTabName + 'Stack' })
          return
        }

        generateScreen(name, { type: 'tabs', value: screenType })
      })
    }
  })
}

generateNewScreen()
