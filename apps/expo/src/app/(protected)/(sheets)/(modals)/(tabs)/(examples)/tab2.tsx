import { useToggle } from "@common/hooks";
import { Box } from "@grapp/stacks";
import { Button, Chip, Screen, Text } from "@mobile/components";
import { Pause } from "lucide-react-native";

const categories = [
  {
    name: "Most Popular",
    topics: [
      "U.S. Politics",
      "Tech Companies",
      "TV & Movies",
      "Recipes",
      "Travel",
      "Celebs",
      "Restaurants",
    ],
  },
  {
    name: "Lifestyle",
    topics: [
      "Travel Tips",
      "Luxury Homes",
      "Architecture",
      "Interior Design",
      "Women's Style",
      "Men's Style",
      "Cars",
      "Wine & Drinks",
      "Home Products",
      "Kitchen Products",
    ],
  },
  {
    name: "Health",
    topics: ["Health", "Exercise", "Mental Wellness"],
  },
];

export default function Tab2() {
  const [visible, toggleVisibility] = useToggle(true);

  return (
    <Screen>
      <Screen.ScrollView gap={6}>
        {categories.map((category) => {
          return (
            <Box gap={4} key={category.name}>
              <Text>{category.name}</Text>
              <Chip.Group key={category.name}>
                {category.topics.map((topic) => (
                  <Chip key={topic} label={topic} />
                ))}
              </Chip.Group>
            </Box>
          );
        })}
        <Button.Group size="l">
          {visible ? (
            <Button icon={<Pause fill={"white"} stroke={"transparent"} />} />
          ) : null}
          <Button title="Button 2" full onPress={toggleVisibility} />
        </Button.Group>
      </Screen.ScrollView>
    </Screen>
  );
}
