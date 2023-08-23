import { StyleSheet, Image } from 'react-native'

import {
  ControlledField,
  KeyboardAwareScrollView,
  LanguagePicker,
  Spacer,
  Version,
} from '~components'
import { Box, Button, Center, Text } from '~components/atoms'
import { REGEX, darkLogo, lightLogo } from '~constants'
import { useColorScheme } from '~contexts'
import {
  useCallback,
  useSignInForm,
  useNavigation,
  useTranslation,
  useTheme,
  useEffect,
} from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { t } = useTranslation()
  const { space } = useTheme()
  const { colorScheme } = useColorScheme()

  const { control, errors, submit, isSubmitting, setFocus } = useSignInForm()

  useEffect(() => {
    setTimeout(() => {
      setFocus('email')
    }, 500)
  }, [setFocus])

  const navigateToSignUp = useCallback(() => navigate('SignUp'), [navigate])
  const navigateToAppInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const focusPasswordInput = useCallback(() => setFocus('password'), [setFocus])

  return (
    <KeyboardAwareScrollView>
      <Box alignItems={'flex-end'} width="full" pr={8}>
        <LanguagePicker />
      </Box>
      <Center p={8} flex={1} flexGrow={1} width={space['full']}>
        <Image
          style={styles.logo}
          resizeMethod="resize"
          resizeMode="contain"
          source={colorScheme === 'light' ? lightLogo : darkLogo}
        />
        <Spacer y="8" />
        <ControlledField.Input
          autoCapitalize="none"
          control={control}
          errors={errors}
          isRequired
          keyboardType="email-address"
          label={t('common.email_label')}
          name="email"
          onSubmitEditing={focusPasswordInput}
          placeholder={t('common.email_placeholder')}
          returnKeyType="next"
          rules={{
            required: t('form.required'),
            pattern: {
              value: REGEX.EMAIL,
              message: t('form.invalid_email_format'),
            },
          }}
          testID="emailInput"
        />
        <ControlledField.Input
          autoCapitalize="none"
          control={control}
          errors={errors}
          isRequired
          label={t('sign_in_screen.password_label')}
          name="password"
          onSubmitEditing={submit}
          placeholder={t('sign_in_screen.password_placeholder')}
          returnKeyType="send"
          rules={{
            required: t('form.required'),
          }}
          testID="passwordInput"
          type="password"
        />
        <Center mt={8}>
          <ControlledField.Checkbox
            control={control}
            errors={errors}
            label={t('sign_in_screen.remember_me')}
            mb={4}
            name="confirm"
            testID="confirmCheckbox"
          />
          <Button
            isDisabled={isSubmitting}
            isLoading={isSubmitting}
            mb={8}
            onPress={submit}
            testID="signInButton"
            width="64"
          >
            {t('sign_in_screen.sign_in')}
          </Button>
          <Text bold mb={4}>
            {t('sign_in_screen.dont_have_an_account')}
          </Text>
          <Button width="64" onPress={navigateToSignUp} variant="ghost">
            {t('sign_in_screen.sign_up')}
          </Button>
        </Center>

        <Box mt={12} />
        {/* TODO: Remove this after implementing signing in with backend  */}
        <Text bold>Correct credentials</Text>
        <Text color="gray.500" textAlign="center">
          Email: test@example.com{'\n'}Password: 123456
        </Text>
        <Version onPress={navigateToAppInfo} />
      </Center>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: '100%',
  },
})
