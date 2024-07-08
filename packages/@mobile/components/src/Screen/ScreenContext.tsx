import React, { createContext, useContext, useMemo } from "react";

interface ScreenContextType {
  footerHeight?: number;
  hasBottomEdge: boolean;
  hasTopEdge: boolean;
}

const ScreenContext = createContext<ScreenContextType>({
  footerHeight: undefined,
  hasBottomEdge: false,
  hasTopEdge: false,
});

export const useScreenContext = () => {
  const context = useContext(ScreenContext);
  if (context === undefined) {
    throw new Error("useScreenContext must be used within a ScreenProvider");
  }
  return context;
};

interface ScreenProviderProps {
  children: React.ReactNode;
  footerHeight?: number;
  edges?: ("bottom" | "top")[];
}

export const ScreenProvider: React.FC<ScreenProviderProps> = ({
  children,
  footerHeight,
  edges = ["bottom"],
}) => {
  const value = useMemo(
    () => ({
      footerHeight,
      hasBottomEdge: edges.includes("bottom"),
      hasTopEdge: edges.includes("top"),
    }),
    [footerHeight, edges],
  );

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  );
};
