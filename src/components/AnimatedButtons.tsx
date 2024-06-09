import {
  BaseButton,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

/**
 * # AnimatedBaseButton
 *
 * Can be used as a base class if you'd like to implement some custom interaction for when the button is pressed.
 **/
export const AnimatedBaseButton = Animated.createAnimatedComponent(BaseButton);

/**
 * # AnimatedRectButton
 *
 * Lists and action buttons
 *
 * This type of button component should be used when you deal with rectangular elements or blocks of content that can be pressed,
 * for example table rows or buttons with text and icons. This component provides a platform specific interaction,
 * rendering a rectangular ripple on Android or highlighting the background on iOS and on older versions of Android.
 *
 * If you have a list with clickable items or have an action button that need to display as a separate UI block
 * (vs being inlined in a text) you should use RectButton. It changes opacity on click and additionally supports
 * a ripple effect on Android.
 */
export const AnimatedRectButton = Animated.createAnimatedComponent(RectButton);

/**
 * # AnimatedBorderlessButto
 *
 * Icon or text only buttons
 *
 * Use BorderlessButton for simple icon-only or text-only buttons. The interaction will be different depending on platform:
 * on Android a borderless ripple will be rendered, whereas on iOS the button will be dimmed.
 * It should be used if you wish to handle non-crucial actions and supportive behaviour.
 */
export const AnimatedBorderlessButton =
  Animated.createAnimatedComponent(BorderlessButton);
