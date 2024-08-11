import { CollapsibleContentProps } from "./Collapsible.types";
import { useCollapsibleContext } from "./CollapsibleRoot";

export const CollapsibleContent = ({ children }: CollapsibleContentProps) => {
  const { open } = useCollapsibleContext();

  if (open) {
    return children;
  }

  return null;
};
