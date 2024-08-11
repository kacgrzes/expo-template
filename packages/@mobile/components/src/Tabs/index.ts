import { TabsItem } from "./TabsItem";
import { TabsScrollView } from "./TabsScrollView";

/**
 * - Typically used for switching between different views or sections within the same context, often in a larger content area.
 * - Often appear as a row of text or icon buttons, usually with an underline or highlight for the active tab.
 * - Can comfortably accommodate a larger number of options, sometimes using scrolling for many tabs.
 * - Often used to switch between different content views or pages.
 */
export const Tabs = {
  Item: TabsItem,
  ScrollView: TabsScrollView,
};

export * from "./Tabs.types";
