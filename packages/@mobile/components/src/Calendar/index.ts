import {
  Calendar,
  CalendarTheme,
  toDateId,
} from "@marceloterreiro/flash-calendar";
import { textVariants } from "../Text";

export { Calendar, toDateId, CalendarTheme };

export const calendarTheme: CalendarTheme = {
  rowMonth: {
    content: textVariants.label1,
    container: { height: undefined },
  },
  rowWeek: {
    container: {
      gap: 0,
      height: undefined,
    },
  },
  itemWeekName: {
    content: textVariants.label2,
    container: {
      backgroundColor: undefined,
    },
  },
  itemEmpty: {
    container: {
      backgroundColor: undefined,
    },
  },
  itemDayContainer: {
    spacer: {},
    activeDayFiller: {},
  },
  itemDay: {
    base: () => {
      return {
        container: {
          height: "100%",
          aspectRatio: 1,
          // aspectRatio: 1,
          alignSelf: "center",
          backgroundColor: undefined,
        },
        content: textVariants.body2,
      };
    },
    today: () => {
      return {
        container: {
          backgroundColor: undefined,
          borderColor: undefined,
          borderWidth: 0,
        },
        content: {
          ...textVariants.label2,
          color: "black",
        },
      };
    },
    active: () => {
      return {
        container: {
          backgroundColor: "black",
        },
        content: {
          color: "white",
        },
      };
    },
  },
};
