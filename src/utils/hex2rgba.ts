export const hex2rgba = (hex: string, alpha = 0.75) => {
  const newHex =
    hex.length === 4
      ? hex.split('').reduce((prev, curr) => {
          return prev + curr + curr
        })
      : hex
  // @ts-expect-error: object is possibly null
  const [r, g, b] = newHex.match(/\w\w/g).map((x) => parseInt(x, 16))
  return `rgba(${r},${g},${b},${alpha})`
}
