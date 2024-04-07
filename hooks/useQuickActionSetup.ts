import * as QuickActions from "expo-quick-actions";
import { useQuickActionRouting } from "expo-quick-actions/router";
import { useEffect } from "react";

export const useQuickActionSetup = () => {
  useQuickActionRouting();
  useEffect(() => {
    // Use all 4 slots
    QuickActions.setItems([
      {
        title: "Wait! Don't delete!",
        id: "hello",
        icon: "prohibit",
        subtitle: "Let us help you out.",
      },
    ]);
  }, []);
};
