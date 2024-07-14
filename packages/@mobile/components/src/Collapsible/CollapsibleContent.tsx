import { useCollapsibleContext } from "./CollapsibleRoot";

type CollapsibleContentProps = {
  children?: React.ReactNode;
};

export const CollapsibleContent = ({ children }: CollapsibleContentProps) => {
  const { open } = useCollapsibleContext();

  if (open) {
    return children;
  }

  return null;
};
