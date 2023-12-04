<p align="center">
    <img src="assets/logo-light.png" alt="Logo">
</p>

[![MIT License](https://img.shields.io/npm/l/@binarapps/expo-ts-template?style=flat-square)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![MIT License](https://img.shields.io/npm/v/@binarapps/expo-ts-template?style=flat-square)](https://img.shields.io/npm/v/@binarapps/expo-ts-template?style=flat-square)
[![MIT License](https://img.shields.io/npm/dt/@binarapps/expo-ts-template?style=flat-square)](https://img.shields.io/npm/dt/@binarapps/expo-ts-template?style=flat-square)
[![MIT License](https://img.shields.io/github/stars/binarapps/expo-ts-template?style=flat-square)](https://img.shields.io/github/stars/binarapps/expo-ts-template?style=flat-square)
[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)

# @binarapps/expo-ts-template

This is a template to be used with react native and expo. It includes all the necessary stuff to start working with expo framework. It has the most popular packages included, so it's easier to start coding the app itself without all the necessary boilerplate setup.

## Why to use?

We know there are a lot of project starters for react native, but we have some good features:

- Fully works with **EXPO GO**
  - Good for start the project and later you can switch to expo-dev-client
- Fully works on **WEB**
  - If you want to develop apps both on web and mobile this starter is good choice for you
- **Code generators** (create new screen / create new component)
- **Fully + Strong typed**
- **App deployment documentation** (currently in progress, but it will be added in near future)

## How it looks?

Check this recording of how it look like:
[![expo-ts-template binarapps](https://img.youtube.com/vi/NmTd5nXXTLI/0.jpg)](https://www.youtube.com/watch?v=NmTd5nXXTLI)

## How to use?

We have prepared a detailed documentation for how to run project with this template - **[Bootstrap docs](./documentation/docs/BOOTSTRAP.md)**

It's great for production project, but if you want to just test it, you can follow the quick steps (on the bottom).

### Quick steps:

- `npx create-expo-app --template=@binarapps/expo-ts-template name_of_your_app`
- `cd name_of_your_app`
- `yarn bootstrap` - the cli will ask you some questinos about your app (you can fill all this data later)

## What's inside?

[![MIT License](https://img.shields.io/npm/types/@binarapps/expo-ts-template?style=flat-square)](https://img.shields.io/npm/types/@binarapps/expo-ts-template?style=flat-square)
[![MIT License](https://img.shields.io/github/package-json/dependency-version/binarapps/expo-ts-template/expo?style=flat-square)](https://img.shields.io/github/package-json/dependency-version/binarapps/expo-ts-template/expo?style=flat-square)
[![MIT License](https://img.shields.io/github/package-json/dependency-version/binarapps/expo-ts-template/@react-navigation/native?style=flat-square)](https://img.shields.io/github/package-json/dependency-version/binarapps/expo-ts-template/@react-navigation/native?style=flat-square)

### Implemented custom features

- generators:
  - create screen - `yarn generate:screen`
  - create component - `yarn generate:component`
- support of multiple environments
  - production, staging, qa
- eas configuration
  - update, build, submit
- verifying code on pull request - pipelines
  - when creating pull request on github, there are tests, linters and types checks. If there will be some error you will be notified that something is wrong.
- custom fonts
  - wait to load fonts and all the assets
- dark / light theme support
  - color scheme detection (dark / light mode toggle)
- navigation
  - screen tracking hook
  - state persistence on development mode
  - prevent go back (to be used on forms for example)
  - strong types, prevent issues in future
- auth flow ready for implementation details
  - using expo-secure-store module to save user token
  - right now it has simple signIn/signOut flow
- animations with `reanimated` and `moti`

### Implemented libraries

- TypeScript
  - app is fully typed
- [Expo v49](https://github.com/expo/expo)
- [React Navigation v6](https://github.com/react-navigation/react-navigation)
- Prettier and eslint
  - code formatting
  - code checking
- Babel-module-resolver
  - unified imports
- jest and @testing-library/react-native
  - unit tests
- i18next
  - translations
  - language detection
- `@gorhom/bottom-sheet`
- Expo-notifications
  - You can read how to configure them [here](/NOTIFICATIONS_SETUP.MD)
- Reactotron
  - used for debugging
- [Reanimated v2](https://github.com/software-mansion/react-native-reanimated)
- Axios + React query
  - Fetching data from backend

## What is planned in the future?

- add some state management tool - in progress
- write docs (app deployment, app setup and more) - in progress
- tutorial on how to use features
  - navigation
  - deeplinking
  - auth flows
  - components
  - react query
  - api calls
  - state management tool
- Add desings (figma) and redesing whole app
- Updating expo versions (in future)
- Deploy app to appstore and playstore
  - Create sample app and document the process of deployment
- Improve mock server logic
- add commit lint
- add script that display last update information (eas update)

### Implementations to add

- [expo image](https://github.com/expo/expo/tree/main/packages/expo-image)
- [FlashList](https://github.com/Shopify/flash-list)
- [ZOD](https://github.com/colinhacks/zod)

## How to contribute?

Contributions are always welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for ways to get started.

Please adhere to this project's `code of conduct`.

## Who to run locally?

Clone the project

```bash
  git clone https://github.com/binarapps/expo-ts-template.git
```

Go to the project directory

```bash
  cd expo-ts-template
```

Install dependencies

```bash
  yarn
```

Start the expo server

```bash
  yarn start
```

## Icons

This template uses [Remix icon set](https://remixicon.com/)

It is added to the app as a font generated by [icomoon app](https://icomoon.io/app/#/select).

### Adding new icons

1. Find `assets/icomoon/selection.json` file in your machine
2. Import this file to this [page (icomoon app)](https://icomoon.io/app/#/select):

- Make sure there are no other icons imported there

3. Download icon which need to be added to the app as svg file.
4. Make sure new icon name is unique (already not used).
5. Add svg file to icomoon app.
6. Go to generate font tab - icomoon app.

- Make sure that all icons that you have added have correct names

7. Download font - icomoon app
8. Replace old files with downloaded ones

- ./selection.json => assets/icomoon/selection.json
- ./fonts/icomoon.ttf => assets/icomoon/icomoon.ttf

9. Generate new types for icons

- run script generating icon types `yarn generate:icon:types`

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to me at mateusz.rostkowsky995@gmail.com

## Contributors

- [Kacper Grzeszczyk](https://www.github.com/kacgrzes) - @kacgrzes
- [Mateusz Rostkowski](https://www.github.com/MateuszRostkowski) - @MateuszRostkowski
- [Michał Szalowski](https://www.github.com/MSzalowski) - @MSzalowski
- [Jakub Zagórski](https://www.github.com/zagoorland) - @zagoorland
- [Łukasz Patalan](https://github.com/lukasz-patalan) - @lukasz
- [Mario Gliwa](https://github.com/mario688) - @mario688
- [Michał Baumruck](https://github.com/micbaumr) - @micbaumr
- [Andrzej Zaborski](https://github.com/AnMiZa) - @AnMiZa
- [Bartłomiej Sworzeń](https://github.com/Sworzen1) - @Sworzen1
- [Karol Andracki](https://github.com/Karol-Andracki) - @karol-andracki
- [Weronika Grzeszczyk](https://github.com/vercia) - @vercia

## Similar packages

- https://github.com/obytes/react-native-template-obytes
- https://github.com/infinitered/ignite
- https://github.com/wataru-maeda/react-native-boilerplate

### Outdated (not maintained anymore)

- https://github.com/kacgrzes/expo-typescript-template (our repo is for of this one)
- https://github.com/codingki/react-native-expo-template
- https://github.com/flatlogic/react-native-starter
- https://github.com/mcnamee/react-native-expo-starter-kit
