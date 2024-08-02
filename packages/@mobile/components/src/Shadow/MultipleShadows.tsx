import React, { ReactNode } from "react";
import { ShadowStyleIOS } from "react-native";
import { Shadow } from "./Shadow";

type MultipleShadowsProps = {
  children?: ReactNode;
  shadowStyles: ShadowStyleIOS[];
};

const MultipleShadows = ({ children, shadowStyles }: MultipleShadowsProps) => {
  const count = shadowStyles.length;
  return (
    <Shadow style={shadowStyles.slice(-1)}>
      {count <= 1 ? (
        children
      ) : (
        <MultipleShadows
          children={children}
          shadowStyles={shadowStyles.slice(0, -1)}
        />
      )}
    </Shadow>
  );
};

export default MultipleShadows;
