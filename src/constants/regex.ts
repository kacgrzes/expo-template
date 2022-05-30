export const REGEX = {
  EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
  REGISTRATION_PASSWORD: /(?=.*\d)(?=.*[A-Z])/g,
} as const
