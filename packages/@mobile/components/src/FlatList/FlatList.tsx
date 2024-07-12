import { Box } from "@grapp/stacks";
import { ComponentProps, memo } from "react";
import { FlatList as RNFlatList } from "react-native-gesture-handler";

export type FlatListProps<ItemT> = ComponentProps<typeof RNFlatList<ItemT>>;

const DefaultItemSeparatorComponent = memo(() => {
  return <Box width={4} height={4} />;
});

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
  ItemSeparatorComponent = DefaultItemSeparatorComponent,
  contentContainerStyle,
  data,
  horizontal,
  keyExtractor = defaultKeyExtractor,
  renderItem,
  renderScrollComponent,
  showsHorizontalScrollIndicator = true,
  showsVerticalScrollIndicator = true,
  ...rest
}: FlatListProps<ItemT>) {
  return (
    <RNFlatList<ItemT>
      ItemSeparatorComponent={ItemSeparatorComponent}
      contentContainerStyle={contentContainerStyle}
      data={data}
      horizontal={horizontal}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderScrollComponent={renderScrollComponent}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...rest}
    />
  );
}
