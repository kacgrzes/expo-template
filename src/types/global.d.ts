import { Server } from 'miragejs'

declare global {
  interface Window {
    server: Server
  }

  type InputTypes = 'protected' | 'email' | undefined

  let server: Server

  type NestedKeys<T> = T extends Record<string, unknown>
    ? {
        [K in keyof T]-?: T[K] extends Record<string, unknown> ? `${K}.${NestedKeys<T[K]>}` : K
      }[keyof T]
    : ''
}

window.server = window.server || {}
