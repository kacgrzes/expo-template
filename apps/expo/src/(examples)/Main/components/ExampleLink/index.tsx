import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

import type { ScreenNames } from "@/constants/screenNames";
import type { FC } from "react";
import type { Example } from "../../types";

type Props = {
  onPress: (info: ScreenNames) => void;
  index: number;
} & Example;

const ExampleLink: FC<Props> = (props) => {
  const { title, testID, info, icons, index } = props;

  return (
    <Link style={styles.container} testID={testID} href={`/${info}`}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {index}. {title}
        </Text>
        <Text style={styles.text}>{icons}</Text>
      </View>
    </Link>
  );
};

export default ExampleLink;
