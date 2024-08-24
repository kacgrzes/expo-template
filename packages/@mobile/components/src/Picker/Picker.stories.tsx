import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Picker } from "./Picker";

const PickerMeta: Meta<typeof Picker> = {
  title: "Picker",
  component: Picker,
  argTypes: {},
  args: {},
};

export default PickerMeta;

export const Default: StoryObj<typeof Picker> = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
      <Picker
        style={{ width: "100%" }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="C++" value="cpp" />
      </Picker>
    );
  },
};
