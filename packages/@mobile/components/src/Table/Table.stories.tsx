import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Text } from "../Text";
import { Table } from "./index";

const TableMeta: Meta<typeof Table> = {
  title: "Table",
  // component: Table,
  argTypes: {},
  args: {},
};

export default TableMeta;

export const Default: StoryObj<typeof Table> = {
  render: (args) => {
    const table = {
      header: ["Header 1", "Header 2", "Header 3"],
      body: [
        ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
        ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
        ["Row 3, Cell 1", "Row 3, Cell 2", "Row 3, Cell 3"],
      ],
    };

    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {table.header.map((header, index) => {
              return (
                <Table.Cell
                  key={header}
                  justify={index !== 0 ? "right" : undefined}
                >
                  <Text variant="label1">{header}</Text>
                </Table.Cell>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {table.body.map((row, index) => {
            return (
              <Table.Row key={`row-${index}`}>
                {row.map((cell, index) => {
                  return (
                    <Table.Cell
                      key={`cell-${index}`}
                      justify={index !== 0 ? "right" : undefined}
                    >
                      <Text variant="body1">{cell}</Text>
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    );
  },
};
