import { useCallback } from 'react'
import { ScrollView, View, Text } from 'react-native'

import { Button } from '~components'
import { CheckIcon } from '~components/icons/CheckIcon'
import { useTheme } from '~hooks'

export const ExamplesScreen = (props: ExamplesScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props
  const { s, colors } = useTheme()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToAppSettings = useCallback(() => navigate('Settings'), [navigate])
  const goToComponents = useCallback(() => navigate('Components'), [navigate])
  const goToGallery = useCallback(() => navigate('Gallery'), [navigate])
  const goToHomeStackDetails = useCallback(
    () =>
      navigate('HomeStack', {
        screen: 'Details',
        params: { id: 'examples-id' },
      }),
    [navigate]
  )
  const exampleColors = [colors.error, colors.warningLight, colors.focused]
  return (
    <ScrollView contentContainerStyle={[s.flex1, s.itemsCenter, s.justifyCenter]}>
      <Text>This is Example screen</Text>
      <View style={[s.flexRow, s.mB10]}>
        {exampleColors.map((color) => (
          <CheckIcon key={color} color={color} />
        ))}
      </View>
      <Button style={s.mB2} onPress={goToApplicationInfo} title="Go to ApplicationInfo" />
      <Button style={s.mB2} onPress={goToComponents} title="Go to Components" />
      <Button style={s.mB2} onPress={goToGallery} title="Go to Gallery" />
      <Button style={s.mB2} onPress={goToHomeStackDetails} title="Go to Home Stack Details" />
      <Button style={s.mB10} onPress={goToAppSettings} title="Go to Settings" />
      <Button.Secondary style={s.mB2} title="Button Seconday" />
      <Button.Flat style={s.mB2} title="Button flat" />
      <Button loading disabled style={s.mB2} title="Loading button" />
      <Button disabled style={s.mB2} title="Disabled button" />
    </ScrollView>
  )
}
