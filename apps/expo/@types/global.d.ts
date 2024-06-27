declare global {
  namespace NodeJS {
    interface ProcessEnv extends Record<string, undefined> {}
  }
}
