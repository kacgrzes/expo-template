import { Button, Notifier, Tooltip, ScrollView } from "components";

export default function Tab1() {
  return (
    <ScrollView>
      <Tooltip>
        <Button
          title="Add notification"
          onPress={() => Notifier.create("hello!" + Math.random())}
        />
      </Tooltip>
    </ScrollView>
  );
}
