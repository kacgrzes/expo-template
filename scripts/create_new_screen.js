/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const prompt = require('prompt-sync')()
const selectPrompt = require('select-prompt')

const Content = require('./contents/content')
const { addAfter, addBefore, execPromise, logger } = require('./utils')

const enumsFileSrc = './src/navigation/config/enums.ts'
const screensFileSrc = './src/navigation/config/screens.ts'
const tabsFileSrc = './src/navigation/config/tabs.ts'
const typesFileSrc = './src/navigation/config/navigation.d.ts'
const screensIndexFileSrc = './src/screens/index.ts'

/**
 * @param {string} name
 */
const validateScreen = (name) => {
  const enumsFile = require('./temp/enums')

  Object.values(enumsFile).forEach((enumValue) => {
    if (enumValue[name]) {
      logger.error(`Screen with name ${name} already exists`)
      process.exit(1)
    }
  })
}

/**
 * @typedef {{
 *     "tabs",
 *     "tabs_new",
 *     "root",
 * }} TYPES
 */

const createScreenFile = (name) => {
  const screenFromFile = fs.readFileSync('./templates/screen_template.tsx', 'utf8')
  const screenContent = screenFromFile
    .replaceAll('_NAME_', name)
    .replace("// @ts-expect-error: it's a template and will be removed", '')

  fs.writeFileSync(`./src/screens/${name}Screen.tsx`, screenContent)
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

  // 3. a) LOGIC WHEN ADDING NEW TAB
  if (screenType.type === 'tabs_new') {
    let newContents = addAfter(
      contents,
      'export const BottomTabsScreens = {',
      Content.bottomTab(screenType.value)
    )

    newContents = addBefore(
      newContents,
      '// ExamplesStack_SCREENS',
      Content.tabEnum(screenType.value, StackScreens, name)
    )

    fs.writeFileSync(enumsFileSrc, newContents)
    return
  }

  // 1. a), 2. a) LOGIC WHEN ADDING ONLY NEW SCREEN - ROOT STACK AND BOTTOM TABS
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
  const newScreen = Content.screenOptions(name, screenNameType)
  let contents =
    screenType.type === 'root'
      ? fs.readFileSync(screensFileSrc, 'utf8')
      : fs.readFileSync(tabsFileSrc, 'utf8')

  if (screenType.type === 'tabs_new') {
    // 3. c) Add new tab to bottomTabs and create stack with screen
    contents = addBefore(contents, '// StackEnums', Content.screenEnumImport(screenType.value))
    contents = addBefore(contents, "} from '~screens'", Content.screenNameImport(name))
    contents = addBefore(
      contents,
      '// ExamplesStack_SCREENS_START',
      Content.newTab(screenType.value, newScreen)
    )
    contents = addBefore(contents, '// BottomTab_SCREENS_END', Content.tabOptions(screenType.value))
  } else {
    // 1. c), 2. c) Add screen to specific group (screens or tabs)
    const typeToSearch = `// ${screenType.value}_SCREENS_END`

    typeToSearch.replace(screenType.value, screenType.value)
    contents = addBefore(contents, typeToSearch, newScreen)
    contents = addBefore(contents, "} from '~screens'", Content.screenNameImport(name))
  }

  const path = screenType.type === 'root' ? screensFileSrc : tabsFileSrc
  fs.writeFileSync(path, contents)
}

/**
 * @param {string} name
 * @param {Object} screenType
 * @param {string} screenType.value
 * @param {keyof TYPES} screenType.type
 */
const addToTypes = (name, screenType) => {
  let contents = fs.readFileSync(typesFileSrc, 'utf8')
  // 1. b) Add screen to navigation types
  if (screenType.type === 'root') {
    contents = addAfter(contents, `// Root_${screenType.value}`, Content.newAuthorizedScreen(name))
    contents = addAfter(contents, '  // RootStack_SCREENS', Content.screenComposite(name))
  }
  // 2. b) Add screen to certain params list in navigation types
  if (screenType.type === 'tabs') {
    contents = addAfter(
      contents,
      `type ${screenType.value}ParamList = {`,
      Content.newAuthorizedScreen(name)
    )
    contents = addAfter(contents, `  // ${screenType.value}_SCREENS`, Content.screenComposite(name))
  }

  // 3. b) Add stack param list with new screen
  if (screenType.type === 'tabs_new') {
    contents = addAfter(contents, '// PARAMS', Content.bottomTabParamsList(screenType.value, name))
    contents = addBefore(
      contents,
      '    // BottomTabScreenProps END',
      Content.bottomTabScreenProps(screenType.value)
    )
    contents = addBefore(
      contents,
      '    ExamplesStackParamList) = keyof RootStackParamList',
      Content.screenCompositeKey(screenType.value)
    )
    contents = addAfter(
      contents,
      '> = StackScreenProps<',
      Content.screenCompositeValue(screenType.value)
    )
    contents = addBefore(
      contents,
      '// MainTabParamList END',
      Content.navigatorScreenParams(screenType.value)
    )
    contents = addBefore(contents, '// WebTabParamListEnd', Content.webTabBar(screenType.value))
    contents = addBefore(
      contents,
      `  // HomeStack_SCREENS`,
      Content.newBottomTabScreenComposite(screenType.value, name)
    )
  }

  fs.writeFileSync(typesFileSrc, contents)
}

const addToIndex = (name) => {
  const newExport = `
export * from './${name}Screen'`

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
  // VALIDATE IF SCREEN NAME IS VALID
  validateScreen(name)

  // GENERATE SCREEN FILE
  logger.info('Generating screen files')
  createScreenFile(name)

  // ADD SCREEN TO INDEX, ENUMS, SCREENS, TYPES
  addToIndex(name)
  addToEnums(name, screenType)
  addToScreens(name, screenType)
  addToTypes(name, screenType)

  // Remove temp files
  logger.info('Removing temp files')
  await execPromise('rm -rf ./scripts/temp')

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
    { title: 'Not authorized', value: 'unauthorized' },
    { title: 'Modal', value: 'modals' },
    { title: 'Normal - authorized and not authorized', value: 'normal' },
  ]

  const enumsFile = require('./temp/enums')

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
        // 1. NEW root screen -> screen_name + screen_type (authorized | not_authorized | modal | normal)
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
          // 2. New bottom tab screen - screen_name + bottom_tab_name
          generateScreen(name, { type: 'tabs_new', value: bottomTabName + 'Stack' })
          return
        }

        // 3. New bottom tab => screen_name + bottom_tab_name
        generateScreen(name, { type: 'tabs', value: screenType })
      })
    }
  })
}

generateNewScreen()

// INSTRUCTION
// 0. Common
//   a) index.ts -> export
//   b) screen_name.ts -> screen_name component

// 1. NEW root screen -> screen_name + screen_type (authorized | not_authorized | modal | normal)
//   a) enums.ts -> const RootStackScreens = {
//   b) navigation.d.ts -> type RootStackParamList = {
//   c) screens.ts -> import + rootStackScreensData.authorized

// 2. New bottom tab screen - screen_name + bottom_tab_name (ExampleStack)
//   a) enums.ts -> const {bottom_tab_name}Screens = {
//   b) navigation.d.ts -> type {bottom_tab_name}ParamList = {
//   c) tabs.ts -> import + // HomeStack_SCREENS_END (before)

// 3. New bottom tab => screen_name + bottom_tab_name
//   a) enums.ts -> const {bottom_tab_name}StackScreens = { + export const BottomTabsScreens = { (after)
//   b) navigation.d.ts -> type {bottom_tab_name}ParamList = {
//   c) tabs.ts -> import + // ${bottom_tab_name}_SCREENS_END (before)
