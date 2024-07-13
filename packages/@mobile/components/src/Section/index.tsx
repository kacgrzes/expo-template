import { Box } from "@grapp/stacks";
import React from "react";
import { Text } from "../Text";

type SectionRootProps = {
  children: React.ReactNode;
};

export const SectionRoot = ({ children }: SectionRootProps) => {
  return <Box>{children}</Box>;
};

type SectionHeaderProps = {
  children: React.ReactNode;
};

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <Box padding={4}>
      <Text>{children}</Text>
    </Box>
  );
};

export const SectionContent = () => {};

export const Section = {
  Root: SectionRoot,
  Header: SectionHeader,
  Content: SectionContent,
};
