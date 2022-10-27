import { Box, Button, Center, Image, Text } from 'native-base'
import { TextInput } from 'react-native'

import { ControlledField, KeyboardAwareScrollView } from '~components'
import { REGEX } from '~constants'
import { useCallback, useSignInForm, useNavigation, useTranslation, useRef, useTheme } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { t } = useTranslation()
  const { space } = useTheme()

  const passwordInputRef = useRef<TextInput>(null)
  const { control, errors, submit, isSubmitting } = useSignInForm()

  const goToSignUp = useCallback(() => navigate('SignUp'), [navigate])

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        width: space['full'],
      }}
    >
      <Center p={8} flex={1} flexGrow={1} width={space['full']}>
        <Image
          alt="logo"
          flex={1}
          height={24}
          resizeMethod="resize"
          resizeMode="contain"
          source={require('~assets/logo.png')}
        />
        <ControlledField.Input
          autoCapitalize="none"
          control={control}
          errors={errors}
          isRequired
          keyboardType="email-address"
          label={t('common.email_label')}
          name="email"
          onSubmitEditing={passwordInputRef.current?.focus}
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
          ref={passwordInputRef}
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
          <Button width="64" onPress={goToSignUp} variant="ghost">
            {t('sign_in_screen.sign_up')}
          </Button>
        </Center>

        <Box mt={12} />
        {/* TODO: Remove this after implementing signing in with backend  */}
        <Text bold>Correct credentials</Text>
        <Text color="gray.500" textAlign="center">
          Email: test@example.com{'\n'}Password: 123456
        </Text>
      </Center>
    </KeyboardAwareScrollView>
  )
}
