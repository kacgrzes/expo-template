import { createContext } from 'react'

// TODO: modify return options from signIn, signOut, signUp and add sendPasswordResetEmail and confirmPasswordReset functions
export type AuthContextType =
  | {
      isSignedIn: boolean | null
      signIn: () => void
      signOut: () => void
      signUp: () => void
    }
  | undefined

export const AuthContext = createContext<AuthContextType>(undefined)
