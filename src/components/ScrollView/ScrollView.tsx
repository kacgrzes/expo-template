import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export { ScrollView } from "react-native";

export type OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
