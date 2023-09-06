import {
  BottomSheetModal,
  BottomSheetFlatList,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet'
// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Box, Row } from 'native-base'
import { useCallback, useMemo, useRef } from 'react'
import { Keyboard, Pressable, StyleSheet, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Icon } from './Icon'
import { SelectKey, SelectItemProps, SelectProps } from './types'

import { useColorScheme } from '~contexts'
// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove `useTheme` hook when issue is resolved
import { useTheme } from '~hooks'

const ITEM_HEIGHT = 56
const BOTTOM_SHEET_CONTENT_HEIGHT = Dimensions.get('screen').height / 1.5

const SelectItem = <T extends SelectKey>({
  item,
  setValue,
  maxSelectedItems,
  closeDropdown,
  value,
  disabled,
}: {
  item: SelectItemProps<T>
  setValue: (newValue: T[]) => void
  maxSelectedItems: number
  closeDropdown: () => void
  value: T[]
  disabled: boolean
}) => {
  const selected = value?.includes(item.value)
  const { colors } = useTheme()

  const onItemSelect = useCallback(() => {
    if (maxSelectedItems === 1) {
      setValue([item.value])
      closeDropdown()
      return
    }
    const newValue = [...value].filter((el) => el)
    if (value?.includes(item.value)) {
      const index = newValue.indexOf(item.value)
      newValue.splice(index, 1)
      setValue(newValue)
      return
    }
    if (value?.length < maxSelectedItems) {
      newValue.push(item.value)
      setValue(newValue)
    }
  }, [closeDropdown, item.value, maxSelectedItems, setValue, value])

  const color = useMemo(
    () => (disabled && !selected ? colors.gray['500'] : colors.black),
    [disabled, selected, colors]
  )

  return (
    <Box key={item.value}>
      <TouchableOpacity style={styles.itemWrapper} onPress={onItemSelect}>
        {maxSelectedItems === 1 ? (
          <Row my={2} flex={1} alignItems="center">
            <Text>{item.labelInDropdown ?? item.label}</Text>
          </Row>
        ) : null}
        {maxSelectedItems > 1 ? (
          <Row mb={4}>
            <Box
              borderRadius={5}
              hitSlop={{ top: 5, left: 15, bottom: 5 }}
              borderColor={disabled && !selected ? colors.gray['500'] : colors.black}
              borderWidth={1}
              width={5}
              height={5}
              mr={4}
              justifyContent="center"
              alignItems="center"
            >
              {selected ? <Icon color={colors.gray['500']} name="check-fill" size={18} /> : null}
            </Box>
            <Row flex={1} alignItems="center">
              <Text style={{ color }}>{item.labelInDropdown ?? item.label}</Text>
            </Row>
          </Row>
        ) : null}
      </TouchableOpacity>
    </Box>
  )
}

export const Select = <T extends SelectKey>({
  placeholder,
  disabled: dropdownDisabled = false,
  items,
  value,
  setValue,
  maxSelectedItems = 1,
  onOpen,
  isError = false,
}: SelectProps<T>) => {
  const ref = useRef<BottomSheetModal>(null)
  const { colors } = useTheme()
  const { colorScheme } = useColorScheme()

  const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], [])

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(snapPoints)

  const showDropdown = useCallback(() => {
    onOpen && onOpen()
    Keyboard.dismiss()
    ref?.current?.present?.()
  }, [onOpen])

  const closeDropdown = useCallback(() => {
    ref.current?.snapToPosition(-1)
  }, [])

  const disabled = useMemo(
    () => value?.length === maxSelectedItems,
    [maxSelectedItems, value?.length]
  )

  const label = useMemo(() => {
    let retVal = ''
    const selectedItems = items?.filter((item) => value.includes(item.value)) ?? []
    if (selectedItems?.length === 0) {
      return placeholder ?? ''
    }
    for (const item of selectedItems) {
      retVal += `${item.label}, `
    }
    retVal = retVal.slice(0, -2)
    return retVal
  }, [items, placeholder, value])

  const renderItem = useCallback(
    ({ item }: { item: SelectItemProps<T> }) => {
      return (
        <SelectItem
          key={item.label}
          item={item}
          setValue={setValue}
          maxSelectedItems={maxSelectedItems}
          closeDropdown={closeDropdown}
          value={value}
          disabled={disabled}
        />
      )
    },
    [closeDropdown, disabled, maxSelectedItems, setValue, value]
  )

  const keyExtractor = useCallback((item: SelectItemProps<T>) => item.value.toString(), [])

  const getItemLayout = useCallback(
    (_data: ArrayLike<SelectItemProps<T>> | null | undefined, index: number) => {
      return { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
    },
    []
  )

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={2} />
    ),
    []
  )

  const inputColor = useMemo(() => {
    return isError
      ? colors.red['500']
      : dropdownDisabled
      ? colors.gray['500']
      : colorScheme === 'light'
      ? colors.black
      : colors.white
  }, [dropdownDisabled, isError, colors, colorScheme])

  return (
    <>
      <Pressable disabled={dropdownDisabled} onPress={showDropdown} style={styles.mainWrapper}>
        <Text
          numberOfLines={1}
          style={[
            styles.textInput,
            isError ? { borderColor: colors.red['500'] } : { borderColor: colors.gray['500'] },
            {
              color: inputColor,
            },
          ]}
        >
          {label}
        </Text>
        <Icon color={inputColor} size={22} name="arrow-down-s-line" style={styles.icon} />
      </Pressable>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={ref}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
      >
        <Box pb={6} px={4} onLayout={handleContentLayout}>
          <BottomSheetFlatList
            style={styles.bottomSheetFlatList}
            data={items}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
          />
        </Box>
      </BottomSheetModal>
    </>
  )
}

const styles = StyleSheet.create({
  bottomSheetFlatList: {
    maxHeight: BOTTOM_SHEET_CONTENT_HEIGHT,
  },
  icon: {
    position: 'absolute',
    right: 8,
  },
  itemWrapper: {
    padding: 8,
  },
  mainWrapper: {
    justifyContent: 'center',
  },
  textInput: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingRight: 28,
    paddingVertical: 12,
  },
})
