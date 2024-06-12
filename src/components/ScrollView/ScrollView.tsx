import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export { ScrollView } from "react-native-gesture-handler";

export type OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
