import Constants from 'expo-constants'

export const ENV = {
  API_URL: 'https://jsonplaceholder.typicode.com', //CONFIG: This is example URL, change to proper,  TODO: create env for dev/staging/prod and keep it there
  ENVIRONMENT: Constants?.expoConfig?.extra?.ENVIRONMENT,
}
