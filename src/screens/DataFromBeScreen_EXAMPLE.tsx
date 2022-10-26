import { View, Text, Center, Divider, Box, FlatList, Spinner } from 'native-base'
import React, { useCallback } from 'react'
import { StyleSheet, ListRenderItem } from 'react-native'

import { useGetCity_EXAMPLE } from '~query-hooks'
import { CatFactType } from '~services'
export const DataFromBeScreen_EXAMPLE = () => {
  const { dataList, isFetchedDataAfterMount } = useGetCity_EXAMPLE()

  const renderItem: ListRenderItem<CatFactType> = useCallback(({ item: { fact, length } }) => {
    return (
      <Box mb="1" bg="dark.700">
        <Text>{'fact:' + fact}</Text>
        <Text>{'length: ' + length}</Text>
      </Box>
    )
  }, [])

  return (
    <View style={styles.container}>
      <Center>
        <Text fontSize="xl">THIS IS EXAMPLE SCREEN</Text>
        <Text fontSize="xl">which contains data from backend</Text>
        <Divider />
        {!isFetchedDataAfterMount ? (
          <Spinner />
        ) : (
          <FlatList data={dataList} renderItem={renderItem} />
        )}
      </Center>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
