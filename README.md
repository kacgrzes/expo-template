<!-- ![Logo](assets/logo.png) -->

<!-- [![MIT License](https://img.shields.io/npm/l/@kacgrzes/expo-template?style=flat-square)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![MIT License](https://img.shields.io/npm/v/@kacgrzes/expo-template?style=flat-square)](https://img.shields.io/npm/v/@kacgrzes/expo-template?style=flat-square)
[![MIT License](https://img.shields.io/npm/dt/@kacgrzes/expo-template?style=flat-square)](https://img.shields.io/npm/dt/@kacgrzes/expo-template?style=flat-square)
[![MIT License](https://img.shields.io/github/stars/kacgrzes/expo-typescript-template?style=flat-square)](https://img.shields.io/github/stars/kacgrzes/expo-typescript-template?style=flat-square) -->

# @binarapps/expo-ts-template

This is a template to be used with expo. It includes all the necessary stuff to start working with expo framework. It has the most popular packages included so it's easier to start coding the app itself without all the necessary boilerplate setup. It has:

Version in the `package.json` is one to one the latest expo on which the template was tested.

## Features

<!-- [![MIT License](https://img.shields.io/npm/types/@kacgrzes/expo-template?style=flat-square)](https://img.shields.io/npm/types/@kacgrzes/expo-template?style=flat-square)
[![MIT License](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/expo?style=flat-square)](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/expo?style=flat-square)
[![MIT License](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/@react-navigation/native?style=flat-square)](https://img.shields.io/github/package-json/dependency-version/kacgrzes/expo-typescript-template/@react-navigation/native?style=flat-square) -->

- TypeScript support
- Expo
- React Navigation
  - with dark and light theme set up
  - with screen tracking hook
  - state persistance on development mode
  - prevent go back (to be used on forms for example)
- native-base
- color scheme detection (dark / light mode toggle)
- hermes enabled on Android by default
- i18next with translations, language detection and translations
- wait to load fonts and all the assets
- auth flow ready for implementation details
  - using expo-secure-store module to save user token
  - right now it has simple signIn/signOut flow
- prettier
- babel-module-resolver
- tests with jest and @testing-library/react-native
- animations with `reanimated` and `moti`
- `@gorhom/bottom-sheet`

See all the details in the documentation.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

<!-- TODO: Add instlation instruction -->
<!-- ## Installation

Init expo with this template using:

```bash
  expo init --template=@kacgrzes/expo-template <name of your app>
``` -->

## Working with designer in your project

Expo template, you are going to use - bundles native-base ui lib out of the box.
To have the best starting experience in your project - write a dm to your designer that they should use [NativeBase Figma Design Kit](https://www.figma.com/community/file/1050753649783931446)

<!-- ## Documentation

[Documentation](https://linktodocumentation) -->

## Demo

Insert gif or link to demo

## Roadmap

- Additional browser support
- Add more integrations

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Run Locally

Clone the project

```bash
  git clone https://github.com/kacgrzes/expo-typescript-template.git
```

Go to the project directory

```bash
  cd expo-typescript-template
```

Install dependencies

```bash
  yarn
```

Start the expo server

```bash
  yarn start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to me at kacgrzes@gmail.com

## Contributors

- [@kacgrzes](https://www.github.com/kacgrzes)
- [@MateuszRostkowski](https://www.github.com/MateuszRostkowski)
- [@MSzalowski](https://www.github.com/MSzalowski)
- [@zagoorland](https://www.github.com/zagoorland)
- [@lukasz-patalan](https://github.com/lukasz-patalan)
