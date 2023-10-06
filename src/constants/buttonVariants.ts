import { StyleSheet } from 'react-native'

type ButtonVariant = 'Primary' | 'Secondary' | 'Outline' | 'Ghost' | 'Link'
type VariantStyle = {
  pressedStyle: {
    backgroundColor: ColorNames
    color?: ColorNames
    borderColor?: ColorNames
    borderWidth?: number
  }
  notPressedStyle: {
    backgroundColor: ColorNames
    color?: ColorNames
    borderColor?: ColorNames
    borderWidth?: number
  }
  disabledStyle: {
    backgroundColor: ColorNames
    color?: ColorNames
    borderColor?: ColorNames
    borderWidth?: number
  }
}

export const buttonVariants: { [key in ButtonVariant]: VariantStyle } = {
  Primary: {
    pressedStyle: {
      backgroundColor: 'primaryDark',
      color: 'white',
    },
    notPressedStyle: {
      backgroundColor: 'primary',
      color: 'white',
    },
    disabledStyle: {
      backgroundColor: 'primaryLight',
      color: 'white',
    },
  },
  Secondary: {
    pressedStyle: {
      backgroundColor: 'secondaryDark',
      color: 'white',
    },
    notPressedStyle: {
      backgroundColor: 'secondary',
      color: 'white',
    },
    disabledStyle: {
      backgroundColor: 'secondaryLight',
      color: 'white',
    },
  },
  Outline: {
    pressedStyle: {
      backgroundColor: 'transparent',
      borderColor: 'primaryLight',
      borderWidth: StyleSheet.hairlineWidth,
      color: 'primaryLight',
    },
    notPressedStyle: {
      backgroundColor: 'transparent',
      borderColor: 'primary',
      borderWidth: StyleSheet.hairlineWidth,
      color: 'primary',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      borderColor: 'gray.200',
      borderWidth: StyleSheet.hairlineWidth,
      color: 'gray.200',
    },
  },
  Ghost: {
    pressedStyle: {
      backgroundColor: 'primary',
      color: 'white',
    },
    notPressedStyle: {
      backgroundColor: 'transparent',
      color: 'primary',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      color: 'black',
    },
  },
  Link: {
    pressedStyle: {
      backgroundColor: 'transparent',
      color: 'blue.800',
    },
    notPressedStyle: {
      backgroundColor: 'transparent',
      color: 'blue.500',
    },
    disabledStyle: {
      backgroundColor: 'transparent',
      color: 'gray.200',
    },
  },
}
