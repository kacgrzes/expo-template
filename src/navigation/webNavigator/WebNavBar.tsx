import { Box, Pressable, Row, Text } from 'native-base'
import React, { useCallback, useEffect, useState } from 'react'

import { bottomTabsScreenData, BottomTabsRoutes } from '../BottomTabNavigator'
import { examplesStackScreensData, ExamplesStackScreensEnum } from '../ExamplesStack'
import { homeStackScreensData, HomeStackScreensEnum } from '../HomeStack'
import { TAB_DEFAULT_ICON } from '../constants'
import { WEB_NAV_BAR_ICON_SIZE } from './constants'

import { Icon } from '~components'
import { BREAKPOINTS } from '~constants'
import { useNavigation, useWeb } from '~hooks'

const getRoutesNamesFromStack = (
  stack: typeof homeStackScreensData | typeof examplesStackScreensData
) => stack.map((screen) => screen.name)

const webNavBarScreensStructure = [
  { [BottomTabsRoutes.Home]: getRoutesNamesFromStack(homeStackScreensData) },
  { [BottomTabsRoutes.Examples]: getRoutesNamesFromStack(examplesStackScreensData) },
]

const getCurrentStackName = (routeName: ExamplesStackScreensEnum | HomeStackScreensEnum) => {
  const currentStack = webNavBarScreensStructure?.find((stack) => {
    return Object.values(stack).flat().includes(routeName)
  })
  return currentStack ? Object.keys(currentStack)[0] : null
}

type Props = { currentRouteName: ExamplesStackScreensEnum | HomeStackScreensEnum }

export const WebNavBar = ({ currentRouteName }: Props): JSX.Element => {
  // TODO: fix type
  const [activeTab, setActiveTab] = useState<string>()
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
    (stackName: BottomTabsRoutes) => {
      setActiveTab(stackName)
      const screenToNavigate = webNavBarScreensStructure?.find(
        (stack) => Object.keys(stack)[0] === stackName
      )?.[stackName][0]

      // @ts-expect-error: react navigation works differently on web and it's hard to add types that satisfy web and mobile
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
          {bottomTabsScreenData.map(({ name, title, icons }) => {
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
