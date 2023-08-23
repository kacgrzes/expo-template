import React, { useCallback } from 'react'
import { StyleSheet, ListRenderItem, FlatList } from 'react-native'

import { Loader, Center, Text, Box } from '~components'
import { Spacer } from '~components/atoms'
import { useGetCity_EXAMPLE } from '~query-hooks'
import { CatFactType } from '~types/catFacts'
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
    <Box style={styles.container}>
      <Center>
        <Text fontSize="xl">THIS IS EXAMPLE SCREEN</Text>
        <Text fontSize="xl">which contains data from backend</Text>
        <Spacer y="1" />
        <FlatList
          ListEmptyComponent={
            !isFetchedDataAfterMount ? (
              <Center height={400} flex={1}>
                <Loader type="circle" />
              </Center>
            ) : (
              <Text>No data found</Text>
            )
          }
          data={dataList}
          renderItem={renderItem}
        />
      </Center>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
