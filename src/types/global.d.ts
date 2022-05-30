import { Server } from 'miragejs'

declare global {
  interface Window {
    server: Server
  }

  type InputTypes = 'protected' | 'email' | undefined

  let server: Server
}

window.server = window.server || {}
