import { PermissionStatus } from 'expo-modules-core'
import { Dispatch, SetStateAction } from 'react'

import createGenericContext from '~utils/createGenericContext'

export type NotificationContextType = {
  permissionStatus?: PermissionStatus
  setPermissionStatus?: Dispatch<SetStateAction<PermissionStatus | undefined>>
  // TODO: Find a way for a better typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  notification?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setNotification?: Dispatch<SetStateAction<Record<string, any> | undefined>>
}

export const [useNotificationContext, NotificationContextProvider] =
  createGenericContext<NotificationContextType>('NotificationContext')
