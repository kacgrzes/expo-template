export const convertEmToNumber = (letterSpacing: string | number, fontSize = 16): number => {
  if (typeof letterSpacing === 'number') return letterSpacing

  if (letterSpacing.endsWith('em')) {
    return parseFloat(letterSpacing) * fontSize
  }

  return parseFloat(letterSpacing)
}
