import { z } from "zod";

// Do not store sensitive info, such as private keys, in EXPO_PUBLIC_ variables.
// These variables will be visible in plain-text in your compiled application.

export const env = z
  .object({
    NODE_ENV: z.string().default("development"),
  })
  .parse(process.env);
