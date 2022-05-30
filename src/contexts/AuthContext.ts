import { createContext } from 'react'

import { noop } from '~utils'

export type SignInInput = { email: string; password: string }

// TODO: modify return options from signIn, signOut, signUp and add sendPasswordResetEmail and confirmPasswordReset functions
export type AuthContextType = {
  isSignedIn: boolean | null
  signIn: (data: SignInInput) => void
  signOut: () => void
  signUp: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isSignedIn: null,
  signIn: noop,
  signOut: noop,
  signUp: noop,
})
