exports.screenOptions = (name, screenNameType) => `{
    name: ${screenNameType}Screens.${name},
    component: ${name}Screen,
    // TODO: Add translation here
    options: { title: '${name.replace('Stack', '')}' },
    deeplink: '/${name.toLowerCase()}',
  },
`

exports.tabOptions = (value) => `  {
    // TODO: Change icon name
    icons: {
      active: 'file-list-2-fill',
      inactive: 'file-list-2-line',
    } as BottomTabIcons,
    name: BottomTabsScreens.${value},
    screens: ${value.charAt(0).toLowerCase() + value.slice(1)}ScreensData,
    // TODO: Add translation here
    options: { title: '${value.replace('Stack', '')}' },
  },
`

exports.screenComposite = (name) => `
type ${name}ScreenProps = ScreenComposite<'${name}'>`

exports.newTab = (value, newScreen) => `// ${value}_SCREENS_START
const ${
  value.charAt(0).toLowerCase() + value.slice(1)
}ScreensData: ScreenType<keyof typeof ${value}Screens>[] = [
  ${newScreen}// ${value}_SCREENS_END
]

`

exports.screenNameImport = (name) => `,  ${name}Screen
`

exports.screenEnumImport = (value) => `  ${value}Screens,
`

exports.tabEnum = (value, StackScreens, name) => `// ${value}_SCREENS
export const ${StackScreens} = {
  ${name}: '${name}',
} as const

`

exports.bottomTab = (value) => `
${value}: '${value}',`

exports.bottomTabParamsList = (value, name) => `
type ${value}ParamList = {
  ${name}: undefined
}\n`

exports.navigatorScreenParams = (value) => `${value}: NavigatorScreenParams<${value}ParamList>
`
exports.webTabBar = (value) => `& ${value}ParamList
`
exports.newBottomTabScreenComposite = (value, name) => `
// ${value}_SCREENS
type ${name}ScreenProps = ScreenComposite<'${name}'>\n\n`

exports.screenCompositeKey = (value) => `${value}ParamList & `

exports.screenCompositeValue = (value) => `${value}ParamList & `

exports.bottomTabScreenProps = (value) => ` | '${value}'\n`

exports.newAuthorizedScreen = (name) => `
${name}: undefined`
