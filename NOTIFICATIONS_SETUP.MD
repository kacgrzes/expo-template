# Expo notifications configuration guide

Expo notifications are already preconfigured in this template. However, you still have to provide some secrets and keys in order to use them across your applications that uses this template.

<b>Expo Go</b> doesn't require any additional configuration so you can check notifications by copying push token (from `Settings` screen) and test notifications (on RL device) on [expo.dev/notifications](http://expo.dev/notifications) tool.

## Usage in expo dev client (expo run:\[android:ios\])

1. Make sure you have created your account in [expo.dev](http://expo.dev).
2. Sign in to your account using `yarn run login` (or `expo login` inside project directory).
3. Follow platform specific configuration.

### Android

1. Configure firebase to get `google-services.json` file - [follow this guide](https://docs.expo.dev/push-notifications/using-fcm/).
2. Make sure that you have changed your `owner` name in `app.json`.
3. Put your `google-services.json` in a project directory and provide path to it in `app.json` in `android` section ex.:

```json
{
  "expo": {
    ...,
    "owner": "@binarapps",
    ...,
    "android": {
      "googleServicesFile": "./path/to/google-services.json"
    }
  }
}
```

4. Provide your `experienceId` in `extra` section in `app.json` typically it follows this scheme - `@owner/slug` ex.:

```json
{
  "expo": {
    ...,
    "owner": "@binarapps",
    "slug": "expo-typescript-template",
    ...,
    "extra": {
      "experienceid": "@binarapps/expo-typescript-template"
    }
  }
}
```

<b>Make sure that you have provided your own secrets for those fields.</b>

### iOS

`iOS` notification credentials are automatically generated (paid apple developer account is required to make them working).

[You can check this guide how to setup push notifications on iOS.](https://docs.expo.dev/push-notifications/push-notifications-setup/#credentials)

## Extending `expo-notifications` config

If u need additional `expo-notifications` config [follow this guide](https://github.com/expo/expo/tree/sdk-47/packages/expo-notifications).
