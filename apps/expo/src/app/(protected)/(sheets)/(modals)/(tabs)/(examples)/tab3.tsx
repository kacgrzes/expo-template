import { Box } from "@grapp/stacks";
import {
  Calendar,
  Screen,
  Text,
  calendarTheme,
  toDateId,
} from "@mobile/components";
import { useState } from "react";

const today = toDateId(new Date());

const contentContainerStyle = {
  paddingHorizontal: 12,
};

export default function Tab3() {
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <Screen>
      <Box paddingX={3} paddingY={4}>
        <Text>Selected date: {selectedDate}</Text>
      </Box>
      <Calendar.List
        contentContainerStyle={contentContainerStyle}
        calendarSpacing={32}
        theme={calendarTheme}
        calendarRowVerticalSpacing={4}
        calendarRowHorizontalSpacing={0}
        calendarFirstDayOfWeek="monday"
        calendarInitialMonthId={today}
        calendarFormatLocale="pl-PL"
        calendarActiveDateRanges={[
          {
            startId: selectedDate,
            endId: selectedDate,
          },
        ]}
        onCalendarDayPress={setSelectedDate}
      />
    </Screen>
  );
}
