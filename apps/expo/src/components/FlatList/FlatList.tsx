import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type FlatListProps<ItemT = any> = RNFlatListProps<ItemT>;

const defaultKeyExtractor = (item: any, index: number) =>
  item.id || index.toString();

/**
 * # FlatList
 *
 * @component
 *
 * @description A component that was generated by Plop
 *
 * @example
 *
 * ```tsx
 * <FlatList />
 * ```
 */
export function FlatList<ItemT = any>({
  data,
  keyExtractor = defaultKeyExtractor,
  renderItem,
}: FlatListProps<ItemT>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { styles } = useStyles(stylesheet);

  return (
    <RNFlatList<ItemT>
      data={data}
      keyExtractor={defaultKeyExtractor || keyExtractor}
      renderItem={renderItem}
    />
  );
}

const stylesheet = createStyleSheet((_theme) => {
  return {
    container: {
      alignSelf: "center",
      flexDirection: "row",
      marginTop: 24,
    },
  };
});
