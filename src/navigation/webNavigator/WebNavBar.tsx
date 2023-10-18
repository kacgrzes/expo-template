import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'

import { BottomTabsScreensKeys } from '../config/enums'

import { Icon, Box, Row, Text, Touchable, Absolute } from '~components'
import { TAB_DEFAULT_ICON, WEB_NAV_BAR_ICON_SIZE } from '~constants'
import { useNavigation, useNavigationState, useNavigationTheme, useWeb } from '~hooks'
import { bottomTabsScreensData } from '~navigation/config/tabs'
import { navigationRef } from '~utils'

export const WebNavBar = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { shouldApplyMobileStyles, webContentWidth } = useWeb()
  const { tabBarTheme } = useNavigationTheme()

  // This hook call is needed to rerender this component when navigation state will change
  // thanks to that function `getCurrentRoute` will have proper value
  useNavigationState((state) => state?.routes)
  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? ''

  const handleTabPress = useCallback(
    (stackName: BottomTabsScreensKeys) => {
      // Search for first screen that is in selected tab
      const screenToNavigate = bottomTabsScreensData?.find((stack) => stack.name === stackName)
        ?.screens?.[0].name as any // eslint-disable-line @typescript-eslint/no-explicit-any

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
    <Box width="full" style={tabBarTheme.tabBarStyle}>
      <Row alignItems="center" justifyContent="space-between" py="2" w={webContentWidth} mx="auto">
        <Row flex={1} {...(shouldApplyMobileStyles && { justifyContent: 'space-evenly' })}>
          {bottomTabsScreensData.map(({ name, icons, screens, options }) => {
            const focused = isActiveTab(screens)
            const iconToRender = (focused ? icons.active : icons.inactive) || TAB_DEFAULT_ICON
            const color = (
              focused ? tabBarTheme.tabBarActiveTintColor : tabBarTheme.tabBarInactiveTintColor
            ) as ColorNames
            return (
              <Box key={name} mx="2">
                <Touchable
                  // eslint-disable-next-line react/jsx-no-bind
                  onPress={() => handleTabPress(name)}
                >
                  {({ isHovered, isPressed }) => (
                    <>
                      <Box
                        // MOBILE
                        flexDirection={shouldApplyMobileStyles ? 'column' : 'row'}
                        style={
                          isPressed && shouldApplyMobileStyles ? styles.iconContainer : undefined
                        }
                        {...(shouldApplyMobileStyles && { alignItems: 'center' })}
                        // DESKTOP
                        backgroundColor={isHovered ? 'light' : 'transparent'}
                        p={!shouldApplyMobileStyles ? 3 : undefined}
                        // BOTH
                        borderRadius={8}
                      >
                        <Icon name={iconToRender} size={WEB_NAV_BAR_ICON_SIZE} color={color} />
                        {options.title ? (
                          <Text bold={focused} color={color} ml="1">
                            {options.title}
                          </Text>
                        ) : null}
                      </Box>
                      {focused && !shouldApplyMobileStyles && (
                        <Absolute bottom={1} backgroundColor={color} w="full" h="2px" />
                      )}
                    </>
                  )}
                </Touchable>
              </Box>
            )
          })}
        </Row>
      </Row>
    </Box>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    opacity: 0.8,
    transform: [{ scale: 0.9 }],
  },
})
