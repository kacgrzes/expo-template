import React, { ComponentType } from 'react'

import { StyledProps } from '../atoms/types'
import { generateStyledSystem } from './generateStyledSystem'

import { useTheme } from '~hooks'

type StylePropKeys = 'style' | 'contentContainerStyle'

/**
 * A higher-order function that generates a styled component with styled-system props.
 * @template P - The props type for the component.
 * @param {ComponentType<P>} component - The component to be styled.
 * @param {StylePropKeys} [styleProp='style'] - The name of the prop to pass the generated styles to (might be e.g. 'contentContainerStyle' for `ScrollView`).
 * @returns {FunctionComponent<P>} A styled component with styled-system props.
 * @example
 * import { Text } from 'react-native'
 * import { generateStyledComponent } from '~components/utils'
 *
 * const StyledText = generateStyledComponent(Text)
 *
 *  const Component = () => (
 *    <StyledText
 *      fontSize={16}
 *      color="primary.500"
 *      fontWeight="bold"
 *    >
 *      Hello World!
 *    </StyledText>
 *  )
 */
export const generateStyledComponent =
  <P extends StyledProps>(component: ComponentType<P>, styleProp: StylePropKeys = 'style') =>
  (props: P) => {
    const { colors } = useTheme()

    const style = generateStyledSystem(props, colors)

    return React.createElement(component, {
      ...props,
      [styleProp]: [style, (props as Record<StylePropKeys, unknown>)[styleProp]],
    })
  }
