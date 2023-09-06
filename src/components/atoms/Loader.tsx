// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Center } from 'native-base'
import React, { useMemo } from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import { BricksLoader, BricksLoaderType } from './BricksLoader'
import { BubblesLoader, BubblesLoaderType } from './BubblesLoader'
import { CircleLoader, CircleLoaderType } from './CircleLoader'
import { DiskLoader, DiskLoaderType } from './DiskLoader'

type LoaderType =
  | {
      type: 'circle'
      isFlipped?: boolean
      color?: string
      size?: number
      thickness?: number
    }
  | {
      type: 'bubbles'
      color?: string
      size?: number
    }
  | {
      type: 'bricks'
      size?: number
      colors?: [string, string, string]
      containerSize?: number
      color?: string
    }
  | {
      type: 'disk'
      circleColor?: string
      containerColor?: string
      size?: number
    }
  | {
      type: 'default'
      color?: string
      size?: string | number
    }

export const Loader = ({ type, ...props }: LoaderType): JSX.Element => {
  const renderLoader = useMemo((): JSX.Element => {
    if (type === 'circle') {
      return <CircleLoader {...(props as CircleLoaderType)} />
    } else if (type === 'bubbles') {
      return <BubblesLoader {...(props as BubblesLoaderType)} />
    } else if (type === 'bricks') {
      return <BricksLoader {...(props as BricksLoaderType)} />
    } else if (type === 'disk') {
      return <DiskLoader {...(props as DiskLoaderType)} />
    } else {
      return <ActivityIndicator {...(props as ActivityIndicatorProps)} />
    }
  }, [type, props])

  return <Center flex={1}>{renderLoader}</Center>
}
