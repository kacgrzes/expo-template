import { Box, Pressable, Row, Text } from 'native-base'
import React, { useCallback } from 'react'

import { BottomTabsScreens } from '../config/enums'
import { bottomTabsScreensData } from '../config/tabs'

import { Icon } from '~components'
import { BREAKPOINTS, TAB_DEFAULT_ICON, WEB_NAV_BAR_ICON_SIZE } from '~constants'
import { useNavigation, useNavigationState, useWeb } from '~hooks'
import { navigationRef } from '~utils'

export const WebNavBar = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { webContentWidth } = useWeb()

  const shouldApplyDesktopStyles = webContentWidth >= BREAKPOINTS.desktop

  // This hook call is needed to rerender this component when navigation state will change
  // thanks to that function `getCurrentRoute` will have proper value
  useNavigationState((state) => state.routes)
  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? ''

  const handleTabPress = useCallback(
    (stackName: BottomTabsScreens) => {
      // Search for first screen that is in selected tab
      const screenToNavigate = bottomTabsScreensData?.find((stack) => stack.name === stackName)
        ?.screens?.[0].name as any

      navigate(screenToNavigate)
    },
    [navigate]
  )

  const isActiveTab = useCallback(
    (screens: { name: string }[]) => {
      // search through screens that are in single bottom tab,
      // if one of screens from bottom tab is found then we should mark it as active
      return screens.some((screen) => screen.name === currentRouteName)
    },
    [currentRouteName]
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
          {bottomTabsScreensData.map(({ name, title, icons, screens }) => {
            const focused = isActiveTab(screens as any)
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
