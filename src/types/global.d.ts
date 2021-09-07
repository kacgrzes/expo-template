import { Server } from 'miragejs'

declare global {
  interface Window {
    server: Server
  }

  let server: Server
}

window.server = window.server || {}
