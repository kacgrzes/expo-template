import { TextInput } from 'react-native'

import { Box, Button, Center, ControlledCheckbox, ControlledInput } from '~components'
import { REGEX } from '~constants'
import { useRef, useSignUpForm, useTheme, useTranslation } from '~hooks'

export const SignUpScreen = () => {
  const { s } = useTheme()
  const { t } = useTranslation()
  const emailInputRef = useRef<TextInput>(null)

  const { control, errors, submit, isSubmitting } = useSignUpForm()

  return (
    <Center px={8} flex={1} bg="gray100">
      <ControlledInput
        fullWidth
        label={t('common.user_label')}
        control={control}
        errors={errors}
        placeholder={t('common.user_placeholder')}
        name="user"
        returnKeyType="next"
        containerStyle={[s.mB2]}
      />
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
      <Box>
        <ControlledCheckbox
          control={control}
          label={t('sign_up_screen.agree_terms_label')}
          name="agree"
          isRequired
        />
        <Box mt={2} />
        <ControlledCheckbox
          control={control}
          label={t('sign_up_screen.newsletter_label')}
          name="newsletter"
        />
      </Box>
      <Box mt={8} />
      <Button onPress={submit} title="Sign Up" loading={isSubmitting} disabled={isSubmitting} />
    </Center>
  )
}
