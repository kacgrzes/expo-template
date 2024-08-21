import { Box } from "@grapp/stacks";
import React, { ReactNode, Children, cloneElement } from "react";
import { Separator } from "../Separator/Separator";

function insertBetween<T>(originalList: T[], elementToInsert: T): T[] {
  if (originalList.length <= 1) {
    return originalList;
  }

  const result: T[] = [];
  for (let i = 0; i < originalList.length - 1; i++) {
    result.push(originalList[i]);
    result.push(cloneElement(elementToInsert, { key: i }));
  }
  result.push(originalList[originalList.length - 1]);

  return result;
}

type TableRootProps = {
  children?: ReactNode;
};

const TableRoot = ({ children }: TableRootProps) => {
  return (
    <Box width={"100%"}>
      {insertBetween(Children.toArray(children), <Separator />)}
    </Box>
  );
};

type TableHeaderProps = {
  children?: ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return children;
};

type TableBodyProps = {
  children?: ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
  return (
    <Box width={"100%"}>
      {insertBetween(Children.toArray(children), <Separator />)}
    </Box>
  );
};

type TableRowProps = {
  children?: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  return <Box direction={"row"}>{children}</Box>;
};

type TableCellProps = {
  children?: ReactNode;
  justify?: "left" | "center" | "right";
};

const TableCell = ({ children, justify }: TableCellProps) => {
  return (
    <Box paddingY={1} flex={"fluid"} alignX={justify}>
      {children}
    </Box>
  );
};

export const Table = {
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
};
