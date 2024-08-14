import DateTimePicker from "@react-native-community/datetimepicker";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const DateTimePickerMeta: Meta<typeof DateTimePicker> = {
  title: "DateTimePicker",
  component: DateTimePicker,
  argTypes: {},
  args: {
    disabled: false,
  },
};

export default DateTimePickerMeta;

export const Default: StoryObj<typeof DateTimePicker> = {
  render: () => {
    return <DateTimePicker display="spinner" value={new Date()} />;
  },
};
