import { createContext } from 'react'

export type AuthContext =
  | {
      isSignedIn: boolean | null
      signIn: () => void
      signOut: () => void
      signUp: () => void
    }
  | undefined

export const AuthContext = createContext<AuthContext>(undefined)
