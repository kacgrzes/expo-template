import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useMemo, useRef } from 'react'
import { Keyboard, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Box } from './Box'
import { Icon } from './Icon'
import { Row } from './Row'
import { Text } from './Text'
import { Touchable } from './Touchables/Touchable'
import { SelectKey, SelectItemProps, SelectProps } from './types'

import { BottomSheet } from '~components/bottomSheets/BottomSheet'
import { BottomSheetFlatList } from '~components/bottomSheets/BottomSheetFlatList'
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
            borderColor={disabled && !selected ? 'gray.500' : 'inputBorder'}
            borderWidth={1}
            width={5}
            height={5}
            mr={4}
            justifyContent="center"
            alignItems="center"
          >
            {selected ? <Icon color="gray.500" name="check-fill" size={18} /> : null}
          </Box>
          <Row flex={1} alignItems="center">
            <Text style={{ color }}>{item.labelInDropdown ?? item.label}</Text>
          </Row>
        </Row>
      ) : null}
    </TouchableOpacity>
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

  const inputColor = useMemo(() => {
    return isError ? 'red.500' : dropdownDisabled ? 'gray.500' : 'text'
  }, [dropdownDisabled, isError])

  return (
    <>
      <Touchable disabled={dropdownDisabled} onPress={showDropdown} justifyContent="center">
        <Text
          numberOfLines={1}
          style={[
            styles.textInput,
            isError ? { borderColor: colors.red['500'] } : { borderColor: colors.inputBorder },
          ]}
          color={inputColor}
        >
          {label}
        </Text>
        <Icon color={inputColor} size={22} name="arrow-down-s-line" style={styles.icon} />
      </Touchable>
      <BottomSheet title={label} bottomSheetRef={ref}>
        <Box pb={6} px={4}>
          <BottomSheetFlatList
            style={styles.bottomSheetFlatList}
            data={items}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
          />
        </Box>
      </BottomSheet>
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
    paddingVertical: 8,
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
