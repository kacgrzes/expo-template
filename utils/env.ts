import { z } from "zod";

// Do not store sensitive info, such as private keys, in EXPO_PUBLIC_ variables.
// These variables will be visible in plain-text in your compiled application.

export const env = z
  .object({
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  })
  .parse(process.env);

export const isDeveloopment = env.NODE_ENV === "development";
export const isProduction = env.NODE_ENV === "production";
export const isTest = env.NODE_ENV === "test";
