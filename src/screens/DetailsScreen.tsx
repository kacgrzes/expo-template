import { Center, Text, Button, Box } from 'native-base'

import { useBottomSheet } from '~components'
import { useTranslation } from '~hooks'

export const DetailsScreen = (props: DetailsScreenProps): JSX.Element => {
  const {
    route: { params },
  } = props
  const { bottomSheetComponentRenderFunction, presentBottomSheet } = useBottomSheet()
  const { t } = useTranslation()

  const bottomSheet = bottomSheetComponentRenderFunction(
    <Box p="10">
      <Text color="black">{t('details_screen.awesome')}</Text>
    </Box>
  )
  return (
    <Center>
      <Text>{t('details_screen.title')}</Text>
      <Button onPress={presentBottomSheet}>{t('details_screen.open_bottom_sheet')}</Button>
      <Text>{t('details_screen.screen_params', { params: JSON.stringify(params) })}</Text>
      {bottomSheet}
    </Center>
  )
}
