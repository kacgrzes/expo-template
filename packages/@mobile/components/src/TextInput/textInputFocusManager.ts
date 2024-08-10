import { TextInput as RNTextInput } from "react-native-gesture-handler";

class TextInputFocusManager {
  private lastFocused: RNTextInput | null;

  constructor() {
    this.lastFocused = null;
  }

  setLastTextInput(textInput: RNTextInput) {
    this.lastFocused = textInput;
  }

  focusLastTextInput() {
    this.lastFocused?.focus();
  }

  dismissLastTextInput() {
    this.lastFocused?.blur();
  }

  getLastTextInput() {
    return this.lastFocused;
  }

  resetLastTextInput() {
    this.lastFocused = null;
  }
}

export const textInputFocusManager = new TextInputFocusManager();
