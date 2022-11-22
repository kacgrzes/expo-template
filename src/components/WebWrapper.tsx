import { View } from 'native-base'
import { FC, PropsWithChildren } from 'react'

import { BREAKPOINTS } from '~constants'
const { desktop, tablet } = BREAKPOINTS
export const WebWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View h="full" w="full" alignItems="center" bgColor="background">
      <View h="full" w={{ mobile: 'full', tablet, desktop }} overflow="visible">
        {children}
      </View>
    </View>
  )
}
