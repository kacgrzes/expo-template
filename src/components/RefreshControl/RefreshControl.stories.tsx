import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import { ScrollView } from "react-native";

import { RefreshControl } from "./RefreshControl";
import { Text } from "../Text";

const Component = () => {
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <Text textAlign="center">Pull to refresh</Text>
    </ScrollView>
  );
};

const RefreshControlMeta: Meta<typeof RefreshControl> = {
  title: "RefreshControl",
  component: Component,
};

export default RefreshControlMeta;

export const Default: StoryObj<typeof RefreshControl> = {};
