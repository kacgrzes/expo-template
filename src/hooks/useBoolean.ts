import { Dispatch, SetStateAction, useCallback, useState, useMemo } from 'react'

type InitialState = boolean | (() => boolean)

export type SetValueType = {
  readonly on: () => void
  readonly off: () => void
  readonly toggle: () => void
  readonly reset: () => void
  readonly setValue: Dispatch<SetStateAction<boolean>>
}

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export function useBoolean(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState)

  const on = useCallback(() => {
    setValue(true)
  }, [])

  const off = useCallback(() => {
    setValue(false)
  }, [])

  const reset = useCallback(() => {
    setValue(initialState)
  }, [initialState])

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  const setter = useMemo(() => ({ on, off, toggle, reset, setValue }), [off, on, reset, toggle])

  return [value, setter] as const
}
