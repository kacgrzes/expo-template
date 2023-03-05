// This hook is copy of hook create by infinite red
// Source: https://github.com/infinitered/ignite/blob/master/boilerplate/app/utils/useSafeAreaInsetsStyle.ts

import { FlexStyle } from 'react-native'
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context'

const propertySuffixMap = {
  top: 'Top',
  bottom: 'Bottom',
  left: 'Left',
  right: 'Right',
}

/**
 * A hook that can be used to create a safe-area-aware style object that can be passed directly to a View.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useSafeAreaInsetsStyle.md)
 */
export function useSafeAreaInsetsStyle(
  safeAreaEdges: Edge[] = [],
  property: 'padding' | 'margin' = 'padding'
): Pick<
  FlexStyle,
  | 'marginBottom'
  | 'marginEnd'
  | 'marginStart'
  | 'marginTop'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingStart'
  | 'paddingTop'
> {
  const insets = useSafeAreaInsets()

  return safeAreaEdges.reduce((acc, e) => {
    return { ...acc, [`${property}${propertySuffixMap[e]}`]: insets[e] }
  }, {})
}
