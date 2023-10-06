import { StyleSheet, Image } from 'react-native'

import {
  ControlledField,
  KeyboardAwareScrollView,
  LanguagePicker,
  Spacer,
  Version,
  Box,
  Center,
  Button,
  Text,
} from '~components'
import { REGEX, darkLogo, lightLogo } from '~constants'
import { useColorScheme } from '~contexts'
import { useCallback, useSignInForm, useNavigation, useTranslation, useEffect } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { t } = useTranslation()
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
      <Box alignItems="flex-end" pr={8}>
        <LanguagePicker />
      </Box>
      <Center p={16}>
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
            name="confirm"
            checkboxText={t('sign_in_screen.remember_me')}
            size={18}
            testID="confirmCheckbox"
          />
          <Button
            disabled={isSubmitting}
            loading={isSubmitting}
            my={8}
            onPress={submit}
            testID="signInButton"
          >
            {t('sign_in_screen.sign_in')}
          </Button>
          <Text bold mb={4}>
            {t('sign_in_screen.dont_have_an_account')}
          </Text>
          <Button.Link onPress={navigateToSignUp}>{t('sign_in_screen.sign_up')}</Button.Link>
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
