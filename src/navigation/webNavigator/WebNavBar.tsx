import { Box, Pressable, Row, Text } from 'native-base'
import React, { useCallback } from 'react'

import { BottomTabsScreensKeys } from '../config/enums'
import { bottomTabsScreensData } from '../config/tabs'

import { Icon } from '~components'
import { TAB_DEFAULT_ICON, WEB_NAV_BAR_ICON_SIZE } from '~constants'
import { useNavigation, useNavigationState, useWeb } from '~hooks'
import { navigationRef } from '~utils'

export const WebNavBar = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { shouldApplyMobileStyles, webContentWidth } = useWeb()

  // This hook call is needed to rerender this component when navigation state will change
  // thanks to that function `getCurrentRoute` will have proper value
  useNavigationState((state) => state.routes)
  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? ''

  const handleTabPress = useCallback(
    (stackName: BottomTabsScreensKeys) => {
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
        w={webContentWidth}
        mx="auto"
      >
        <Row flex={1} {...(shouldApplyMobileStyles && { justifyContent: 'space-evenly' })}>
          {bottomTabsScreensData.map(({ name, icons, screens, options }) => {
            const focused = isActiveTab(screens as any)
            const iconToRender = (focused ? icons.active : icons.inactive) || TAB_DEFAULT_ICON
            return (
              <Box key={name} mx="4">
                <Box>
                  <Pressable
                    flexDir={shouldApplyMobileStyles ? 'column' : 'row'}
                    // eslint-disable-next-line react/jsx-no-bind
                    onPress={() => handleTabPress(name)}
                    {...(shouldApplyMobileStyles && { alignItems: 'center' })}
                  >
                    <Icon
                      name={iconToRender}
                      size={WEB_NAV_BAR_ICON_SIZE}
                      color={focused ? 'red.800' : 'gray.500'}
                    />
                    {options.title ? (
                      <Text
                        bold={focused}
                        color={focused ? 'actionBlue' : 'offMain'}
                        ml="1"
                        underline={focused}
                      >
                        {options.title}
                      </Text>
                    ) : null}
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
