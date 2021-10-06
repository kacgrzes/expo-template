import { createServer } from 'miragejs'

export const startMockedServer = (): void => {
  if (window.server) {
    server.shutdown()
  }

  window.server = createServer({
    environment: 'development',
    namespace: '/api',
    timing: 400,
    logging: true,
    useDefaultPassthroughs: true,
    routes() {
      this.get('/timestamp', () => {
        return {
          timestamp: new Date().toISOString(),
        }
      })
    },
  })
}
