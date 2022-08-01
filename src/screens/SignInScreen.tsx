import { Box, Button, Center, Image, Text } from 'native-base'
import { TextInput } from 'react-native'

import { ControlledCheckbox, ControlledInput } from '~components'
import { REGEX } from '~constants'
import { useCallback, useSignInForm, useNavigation, useTranslation, useRef } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { navigate } = useNavigation()
  const { t } = useTranslation()
  const passwordInputRef = useRef<TextInput>(null)
  const { control, errors, submit, isSubmitting } = useSignInForm()

  const goToSignUp = useCallback(() => navigate('SignUp'), [navigate])

  return (
    <Center p={8} flex={1}>
      <Image
        source={require('~assets/logo.png')}
        resizeMode="contain"
        resizeMethod="resize"
        height={24}
        alt="logo"
        flex={1}
      />
      <ControlledInput
        isRequired
        returnKeyType="next"
        label={t('common.email_label')}
        control={control}
        errors={errors}
        name="email"
        keyboardType="email-address"
        autoCapitalize="none"
        onSubmitEditing={passwordInputRef.current?.focus}
        placeholder={t('common.email_placeholder')}
        rules={{
          required: t('form.required'),
          pattern: {
            value: REGEX.EMAIL,
            message: t('form.invalid_email_format'),
          },
        }}
      />
      <ControlledInput
        isRequired
        ref={passwordInputRef}
        returnKeyType="send"
        onSubmitEditing={submit}
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        name="password"
        type="password"
        autoCapitalize="none"
        placeholder={t('sign_in_screen.password_placeholder')}
        rules={{
          required: t('form.required'),
        }}
      />
      <Center mt={8}>
        <ControlledCheckbox
          control={control}
          errors={errors}
          name="confirm"
          label={t('sign_in_screen.remember_me')}
          mb={4}
        />
        <Button
          testID="signInButton"
          onPress={submit}
          isLoading={isSubmitting}
          width="64"
          isDisabled={isSubmitting}
          mb={8}
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
  )
}
