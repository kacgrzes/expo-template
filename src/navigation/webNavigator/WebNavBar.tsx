import { Box, Pressable, Row, Text } from 'native-base'
import React, { useCallback, useEffect, useState } from 'react'

import { bottomTabsScreensData, BottomTabsScreens } from '../BottomTabNavigator'
import { examplesStackScreensData, ExamplesStackScreens } from '../ExamplesStack'
import { homeStackScreensData, HomeStackScreens } from '../HomeStack'
import { TAB_DEFAULT_ICON } from '../constants'
import { WEB_NAV_BAR_ICON_SIZE } from './constants'

import { Icon } from '~components'
import { BREAKPOINTS } from '~constants'
import { useNavigation, useWeb } from '~hooks'

const getScreensNamesFromStack = (
  stack: typeof homeStackScreensData | typeof examplesStackScreensData
) => stack.map((screen) => screen.name)

const webNavBarScreensStructure = [
  { [BottomTabsScreens.Home]: getScreensNamesFromStack(homeStackScreensData) },
  { [BottomTabsScreens.Examples]: getScreensNamesFromStack(examplesStackScreensData) },
] as const

const getCurrentStackName = (routeName: ExamplesStackScreens | HomeStackScreens) => {
  const currentStack = webNavBarScreensStructure?.find((stack) =>
    Object.values(stack).flat().includes(routeName)
  )
  return Object.keys(currentStack)[0]
}

type Props = { currentRouteName: ExamplesStackScreens | HomeStackScreens }

export const WebNavBar = ({ currentRouteName }: Props): JSX.Element => {
  // TODO: fix type
  const [activeTab, setActiveTab] = useState<BottomTabsScreens>()
  const { navigate } = useNavigation()
  const { webContentWidth } = useWeb()

  const shouldApplyDesktopStyles = webContentWidth >= BREAKPOINTS.desktop

  useEffect(() => {
    if (currentRouteName) {
      const currentStack = getCurrentStackName(currentRouteName)

      if (currentStack) {
        setActiveTab(currentStack)
      }
    }
  }, [currentRouteName])

  const handleTabPress = useCallback(
    (stackName: typeof BottomTabsScreens) => {
      setActiveTab(stackName)
      const screenToNavigate = webNavBarScreensStructure?.find(
        (stack) => Object.keys(stack)[0] === stackName
      )?.[stackName][0]

      navigate(screenToNavigate)
    },
    [navigate, setActiveTab]
  )

  return (
    <Box w="full" bgColor="white">
      <Row
        alignItems="center"
        bgColor="white"
        justifyContent="space-between"
        py="3"
        w={'100%'}
        mx="auto"
      >
        <Row flex={1} {...(!shouldApplyDesktopStyles && { justifyContent: 'space-evenly' })}>
          {bottomTabsScreensData.map(({ name, title, icons }) => {
            const focused = activeTab === name
            const iconToRender = (focused ? icons.active : icons.inactive) || TAB_DEFAULT_ICON
            return (
              <Box key={name} mx="4">
                <Box>
                  <Pressable
                    flexDir={shouldApplyDesktopStyles ? 'row' : 'column'}
                    // eslint-disable-next-line react/jsx-no-bind
                    onPress={() => handleTabPress(name)}
                    {...(!shouldApplyDesktopStyles && { alignItems: 'center' })}
                  >
                    <Icon
                      name={iconToRender}
                      size={WEB_NAV_BAR_ICON_SIZE}
                      color={focused ? 'red.800' : 'gray.500'}
                    />
                    <Text
                      bold={focused}
                      color={focused ? 'actionBlue' : 'offMain'}
                      ml="1"
                      underline={focused}
                    >
                      {title}
                    </Text>
                  </Pressable>
                  {focused && <Box bgColor="actionBlue" w="full" h="2px" />}
                </Box>
              </Box>
            )
          })}
        </Row>
      </Row>
    </Box>
  )
}
