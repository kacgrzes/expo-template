import { useContext } from 'react'

import { AuthContext } from '~contexts'

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
