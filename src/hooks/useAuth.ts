import { useContext } from 'react'

import { AuthContext, AuthContextType } from '~contexts'

export const useAuth = (): NonNullable<AuthContextType> => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
