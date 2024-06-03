import { View } from "react-native";
import { ContextMenu } from "./ContextMenu";

import { Button } from "../Button";

const Preview = () => {
  return <View style={{ width: 200, height: 200, backgroundColor: "red" }} />;
};

export function ContextMenuExample() {
  return (
    <ContextMenu.Root style={{ width: "100%" }}>
      <ContextMenu.Trigger asChild>
        <Button title="ContextMenu example" full />
      </ContextMenu.Trigger>

      <ContextMenu.Content>
        <ContextMenu.Preview>{() => <Preview />}</ContextMenu.Preview>

        <ContextMenu.Label>Hello</ContextMenu.Label>
        <ContextMenu.Item key="1">
          <ContextMenu.ItemTitle>Hey</ContextMenu.ItemTitle>
        </ContextMenu.Item>

        <ContextMenu.Group>
          <ContextMenu.Item key="2">
            <ContextMenu.ItemTitle>Hey #2</ContextMenu.ItemTitle>
          </ContextMenu.Item>
          <ContextMenu.Item key="3">
            <ContextMenu.ItemTitle>Hey #3</ContextMenu.ItemTitle>
          </ContextMenu.Item>
        </ContextMenu.Group>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
