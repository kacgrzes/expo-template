import { Chip, Screen } from "@mobile/components";

export default function Tab2() {
  return (
    <Screen>
      <Screen.ScrollView>
        <Chip.Group>
          <Chip />
          <Chip selected />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </Chip.Group>
      </Screen.ScrollView>
    </Screen>
  );
}
