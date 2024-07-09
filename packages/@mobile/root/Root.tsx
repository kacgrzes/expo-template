import { ExpoRoot } from "expo-router";
import React from "react";
import { Providers } from "./Providers";

export interface RequireContext {
  /** Return the keys that can be resolved. */
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  /** **Unimplemented:** Return the module identifier for a user request. */
  resolve(id: string): string;
  /** **Unimplemented:** Readable identifier for the context module. */
  id: string;
}

type RootProps = {
  context: RequireContext;
};

export function Root({ context }: RootProps) {
  return <ExpoRoot context={context} wrapper={Providers} />;
}
