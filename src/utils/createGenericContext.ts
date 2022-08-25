import { createContext, useContext } from 'react'

export const createGenericContext = <T>(contextName: string) => {
  // Create a context with a generic parameter or undefined
  const genericContext = createContext<T | undefined>(undefined)

  // Check if the value provided to the context is defined or throw an error
  const useGenericContext = () => {
    const contextIsDefined = useContext(genericContext)
    if (!contextIsDefined) {
      throw new Error(`${contextName} context must be used within a ${contextName} Provider`)
    }
    return contextIsDefined
  }

  return [useGenericContext, genericContext.Provider] as const
}

export default createGenericContext
