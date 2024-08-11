import { Box } from "@grapp/stacks";
import { Chip, Screen, Text } from "@mobile/components";

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
  return (
    <Screen>
      <Screen.ScrollView gap={6}>
        {categories.map((category) => {
          return (
            <Box gap={4}>
              <Text>{category.name}</Text>
              <Chip.Group key={category.name}>
                {category.topics.map((topic) => (
                  <Chip key={topic} label={topic} />
                ))}
              </Chip.Group>
            </Box>
          );
        })}
      </Screen.ScrollView>
    </Screen>
  );
}
