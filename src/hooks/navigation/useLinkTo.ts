import { useLinkTo as useRNLinkTo } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { prefix } from '~navigation/linking'

type ReturnFunction = (link: string) => Promise<void>

const deeplinkPrefix = prefix.slice(0, -1)

export const useLinkTo = (): ReturnFunction => {
  const linkToNative = useRNLinkTo()

  return async (link) => {
    const isWebLink = link.includes('https') || link.includes('http')

    if (isWebLink) {
      const supported = await Linking.canOpenURL(link)
      if (supported) {
        await Linking.openURL(link)
      }
      return
    }

    linkToNative(link.replace(deeplinkPrefix, ''))
  }
}
