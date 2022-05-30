export async function wait(timeMs = 5000): Promise<boolean> {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(true), timeMs)
  })
}
