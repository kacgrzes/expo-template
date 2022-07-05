import { Box, Button, Center, Text, FormControl, Input } from 'native-base'

import { useRef, useSignInForm, useTranslation } from '~hooks'

export const SignInScreen = (): JSX.Element => {
  const { t } = useTranslation()

  const { control, error, errors, submit, isSubmitting } = useSignInForm()

  const goToSignUp = useCallback(() => navigate('SignUp'), [navigate])

  return (
    <Center px={8} flex={1}>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input type="text" keyboardType="email-address" />
        <FormControl.ErrorMessage>This is error</FormControl.ErrorMessage>
        <FormControl.HelperText>Email must be her</FormControl.HelperText>
      </FormControl>

      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input type="text" keyboardType="email-address" />
        <FormControl.ErrorMessage>This is error</FormControl.ErrorMessage>
        <FormControl.HelperText>Email must be her</FormControl.HelperText>
      </FormControl>
      <Box mt={4} />
      <Button onPress={submit} isLoading={isSubmitting} isDisabled={isSubmitting}>
        Sign in
      </Button>
      <Box mt={4} />
      {!!error && <Text>{error}</Text>}
      {/* TODO: Remove this after implementing signing in with backend  */}
      <Text>Correct credentials</Text>
      <Text textAlign={'center'}>Email: test@example.com{'\n'}Password: 123456</Text>
    </Center>
  )
}
