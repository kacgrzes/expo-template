import * as QuickActions from "expo-quick-actions";
import { useQuickActionRouting } from "expo-quick-actions/router";
import { useEffect } from "react";

/**
 * iOS best practices:
 * @see https://github.com/EvanBacon/expo-quick-actions?tab=readme-ov-file#ios-best-practice
 *
 * Android best practices:
 * @see https://github.com/EvanBacon/expo-quick-actions?tab=readme-ov-file#android-best-practice
 */
export const useQuickActionSetup = () => {
  useQuickActionRouting();
  useEffect(() => {
    // Use all 4 slots
    // Avoid branded icons
    QuickActions.setItems([
      {
        title: "Wait! Don't delete!",
        id: "hello",
        icon: "prohibit",
        subtitle: "Let us help you out.",
        params: {
          href: "/help",
        },
      },
    ]);
  }, []);
};
