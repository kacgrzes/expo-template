export const removeFalsyProperties = <O extends object>(obj: O) => {
  const filterdObject = Object.entries(obj).reduce<Record<string, unknown>>((acc, curr) => {
    if (curr[1]) {
      acc[curr[0]] = curr[1]
    }
    return acc
  }, {})

  return filterdObject as O
}
