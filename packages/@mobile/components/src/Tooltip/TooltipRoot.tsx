import { TooltipProvider } from "./TooltipProvider";

type TooltipRootProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const TooltipRoot = ({ children }: TooltipRootProps) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};
