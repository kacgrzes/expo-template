import type { Config } from "jest";
// import { pathsToModuleNameMapper } from "ts-jest";
import tsConfig from "./tsconfig.json";

const config: Config = {
  // moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths),
  moduleNameMapper: {
    "/^@/(.*)$/": ["<rootDir>/src/$1", "<rootDir>/src/modules/$1"],
  },
  modulePaths: [tsConfig.compilerOptions.baseUrl],
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.tsx"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  transformIgnorePatterns: [
    "node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts(/)?.*|react-navigation|@react-navigation(/)?.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|zeego))",
  ],
  verbose: true,
};

export default config;
