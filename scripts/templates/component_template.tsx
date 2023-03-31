import { Center, Text } from 'native-base'
import { FC } from 'react'

import { useTranslation } from '~hooks'

type _NAME_Props = {
  example: string
}

export const _NAME_: FC<_NAME_Props> = ({ ...props }): JSX.Element => {
  const { example } = props
  const { t } = useTranslation()

  return (
    <Center flex={1}>
      <Text textAlign="center">{t('examples_component.example')} _NAME_</Text>
      <Text textAlign="center">{example}</Text>
    </Center>
  )
}
