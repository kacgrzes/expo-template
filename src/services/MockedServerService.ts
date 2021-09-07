import { createServer } from 'miragejs'

export const startMockedServer = () => {
  if (window.server) {
    server.shutdown()
  }

  window.server = createServer({
    namespace: '/api',
    timing: 400,
    routes() {
      this.get('/timestamp', () => {
        return {
          timestamp: new Date().toISOString(),
        }
      })
    },
  })
}
