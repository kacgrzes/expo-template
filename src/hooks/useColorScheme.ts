// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.

// Do not import it from '~hooks' it creates 'require cycle'
import { useContext } from 'react'

import { ColorSchemeContext, ColorSchemeContextType } from '~contexts'

export const useColorScheme = (): ColorSchemeContextType => {
  const context = useContext(ColorSchemeContext)
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider')
  }
  return context
}
