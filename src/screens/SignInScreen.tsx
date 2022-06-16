import { TextInput, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import KeyboardAwareScrollView from './KeyboardAwareScrollView'

import { Box, Button, Center, ControlledInput, Text } from '~components'
import { REGEX } from '~constants'
import { useRef, useSignInForm, useTheme, useTranslation } from '~hooks'

const keyboardDismissMode = Platform.OS === 'android' ? 'on-drag' : 'interactive'

export const SignInScreen = (): JSX.Element => {
  const { s } = useTheme()
  const { t } = useTranslation()
  const passwordInputRef = useRef<TextInput>(null)
  const lastInputRef = useRef<TextInput>(null)

  const { control, error, errors, submit, isSubmitting } = useSignInForm()

  const focusPasswordInput = () => passwordInputRef.current?.focus()
  const focusLastInput = () => lastInputRef.current?.focus()

  const renderInputs = () => (
    <>
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
        onSubmitEditing={focusPasswordInput}
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
        ref={passwordInputRef}
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        // type="protected"
        returnKeyType="next"
        onSubmitEditing={focusLastInput}
        // onSubmitEditing={submit}
        // rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        // type="protected"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        // type="protected"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        // type="protected"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
      <ControlledInput
        ref={lastInputRef}
        fullWidth
        label={t('sign_in_screen.password_label')}
        control={control}
        errors={errors}
        placeholder={t('sign_in_screen.password_placeholder')}
        name="password"
        returnKeyType="send"
        onSubmitEditing={submit}
        rules={{ required: t('form.required') }}
        containerStyle={[s.mB2]}
      />
    </>
  )

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[s.flexGrow, s.pX4, s.justifyCenter]}
      extraScrollHeight={50}
      keyboardDismissMode={keyboardDismissMode}
      keyboardOpeningTime={0}
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Center px={8} flex={1} bg="gray100">
          <Box mt={'600px'} />
          {renderInputs()}

          <Button onPress={submit} title="Sign in" loading={isSubmitting} disabled={isSubmitting} />
          <Box mt={4} />
          {!!error && <Text.BodyBold color="errorLight">{error}</Text.BodyBold>}
          {/* TODO: Remove this after implementing signing in with backend  */}
          <Text.BodyBold>Correct credentials</Text.BodyBold>
          <Text.BodyRegular color="gray500" center>
            Email: test@example.com{'\n'}Password: 123456
          </Text.BodyRegular>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}
