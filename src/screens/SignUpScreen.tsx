import { Button, Center, useTheme } from 'native-base'
import { useCallback, useEffect } from 'react'

import { ControlledField, KeyboardAwareScrollView } from '~components'
import { REGEX } from '~constants'
import { useSignUpForm, useTranslation } from '~hooks'

export const SignUpScreen = () => {
  const { t } = useTranslation()
  const { space } = useTheme()

  const { control, errors, submit, isSubmitting, register, setFocus } = useSignUpForm()

  useEffect(() => {
    setTimeout(() => {
      setFocus('user')
    }, 500)
  }, [setFocus])

  const focusEmailInput = useCallback(() => setFocus('email'), [setFocus])
  const focusPasswordInput = useCallback(() => setFocus('password'), [setFocus])

  return (
    <KeyboardAwareScrollView>
      <Center px={8} flex={1} flexGrow={1} width={space['full']}>
        <ControlledField.Input
          {...register('user')}
          mb={2}
          autoCapitalize="none"
          control={control}
          errors={errors}
          name="user"
          label={t('common.user_label')}
          placeholder={t('common.user_placeholder')}
          rules={{
            required: t('form.required'),
          }}
          returnKeyType="next"
          onSubmitEditing={focusEmailInput}
        />
        <ControlledField.Input
          {...register('email')}
          autoCapitalize="none"
          label={t('common.email_label')}
          control={control}
          errors={errors}
          keyboardType="email-address"
          placeholder={t('common.email_placeholder')}
          name="email"
          returnKeyType="next"
          onSubmitEditing={focusPasswordInput}
          rules={{
            required: t('form.required'),
            pattern: {
              value: REGEX.EMAIL,
              message: t('form.invalid_email_format'),
            },
          }}
          isRequired
          mb={2}
        />
        <ControlledField.Input
          {...register('password')}
          isRequired
          mb={16}
          returnKeyType="next"
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

        <ControlledField.Checkbox
          isRequired
          control={control}
          errors={errors}
          name="agree"
          label={t('sign_up_screen.agree_terms_label')}
          mb={2}
        />
        <ControlledField.Checkbox
          isRequired
          control={control}
          errors={errors}
          name="newsletter"
          label={t('sign_up_screen.newsletter_label')}
          mb={4}
        />
        <Button onPress={submit} isLoading={isSubmitting} isDisabled={isSubmitting}>
          {t('sign_up_screen.sign_up')}
        </Button>
      </Center>
    </KeyboardAwareScrollView>
  )
}
