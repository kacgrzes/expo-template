import { createContext } from 'react'

import { SignInFormValues, SignUpFormValues } from '~types/authForms'
import { noop } from '~utils'

// TODO: modify return options from signIn, signOut, signUp and add sendPasswordResetEmail and confirmPasswordReset functions
export type AuthContextType = {
  isSignedIn: boolean | null
  signIn: (data: SignInFormValues) => void
  signOut: () => void
  signUp: (data: SignUpFormValues) => void
}

export const AuthContext = createContext<AuthContextType>({
  isSignedIn: null,
  signIn: noop,
  signOut: noop,
  signUp: noop,
})
