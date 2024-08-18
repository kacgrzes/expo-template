import { Box, FloatBox } from "@grapp/stacks";
import { Button, Card, Overlay, Tooltip } from "@mobile/components";
import { useNavigation } from "expo-router";

export default function FullScreenModal() {
  const { goBack } = useNavigation();

  return (
    <>
      <Overlay onPress={goBack} />
      <FloatBox
        pointerEvents="box-none"
        offset={0}
        alignX={"center"}
        alignY={"center"}
        paddingX={5}
      >
        <Card
          style={{
            width: "100%",
          }}
          height={200}
        >
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button title="Toast example" />
            </Tooltip.Trigger>
            <Tooltip.Overlay transparent />
            <Tooltip.Content>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        </Card>
      </FloatBox>
    </>
  );
}
