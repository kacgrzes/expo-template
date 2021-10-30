import { ASYNC_STORAGE_KEYS } from './asyncStorageKeys'

const isArrayUnique = (arr: string[]) => Array.isArray(arr) && new Set(arr).size === arr.length

describe('asyncStorageKeys', () => {
  it('values should be unique', () => {
    const values = Object.values(ASYNC_STORAGE_KEYS)

    expect(isArrayUnique(values)).toBeTruthy()
  })
  it('keys should be unique', () => {
    const keys = Object.keys(ASYNC_STORAGE_KEYS)

    expect(isArrayUnique(keys)).toBeTruthy()
  })
})
