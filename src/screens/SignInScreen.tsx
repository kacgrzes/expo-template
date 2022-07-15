import { TextInput } from 'react-native'

import { Box, Button, Center, ControlledInput, Text, ControlledCheckbox } from '~components'
import { REGEX } from '~constants'
import { useRef, useSignInForm, useTheme, useTranslation } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { s } = useTheme()
  const { t } = useTranslation()
  const emailInputRef = useRef<TextInput>(null)

  const { control, error, errors, submit, isSubmitting } = useSignInForm()

  return (
    <Center px={8} flex={1} bg="gray100">
      <ControlledInput
        fullWidth
        label={t('common.email_label')}
        control={control}
        errors={errors}
        keyboardType="email-address"
        placeholder={t('common.email_placeholder')}
        name="email"
        type="email"
        returnKeyType="next"
        onSubmitEditing={emailInputRef.current?.focus}
        rules={{
          required: t('form.required'),
          pattern: {
            value: REGEX.EMAIL,
            message: t('form.invalid_email_format'),
          },
        }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        ref={emailInputRef}
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        type="protected"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledCheckbox
        control={control}
        name="confirm"
        label="Remember me"
        disabled={isSubmitting}
      />
      <Box mt={4} />
      <Button onPress={submit} title="Sign in" loading={isSubmitting} disabled={isSubmitting} />
      <Box mt={4} />
      {!!error && <Text.BodyBold color="errorLight">{error}</Text.BodyBold>}
      {/* TODO: Remove this after implementing signing in with backend  */}
      <Text.BodyBold>Correct credentials</Text.BodyBold>
      <Text.BodyRegular color="gray500" center>
        Email: test@example.com{'\n'}Password: 123456
      </Text.BodyRegular>
    </Center>
  )
}
