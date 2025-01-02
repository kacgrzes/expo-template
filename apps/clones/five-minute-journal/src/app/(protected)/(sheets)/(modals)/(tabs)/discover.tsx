import {
  Card,
  FlatList,
  Screen,
  Section,
  Text,
  useScreenScrollView,
} from "@mobile/components";
import { useScrollToTop } from "@react-navigation/native";

export default function Discover() {
  const ref = useScreenScrollView();

  useScrollToTop(ref);

  return (
    <Screen
      edges={["top"]}
      footer={
        <Card margin={3} borderRadius={8}>
          <Text>Footer</Text>
        </Card>
      }
    >
      <Screen.ScrollView
        ref={ref}
        contentContainerStyle={{ paddingHorizontal: 0, gap: 16 }}
      >
        <Card margin={3} borderRadius={8}>
          <Text>Start your reading streak!</Text>
        </Card>
        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={() => {
            return (
              <Card
                style={{
                  height: 100,
                  aspectRatio: 3 / 4,
                }}
              />
            );
          }}
        />
        <Section.Root>
          <Section.Header>Challenges</Section.Header>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={() => {
              return (
                <Card
                  style={{
                    height: 120,
                    aspectRatio: 2,
                  }}
                />
              );
            }}
          />
        </Section.Root>
        <Section.Root>
          <Section.Header>Collections</Section.Header>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={() => {
              return (
                <Card
                  style={{
                    height: 200,
                    aspectRatio: 1,
                  }}
                />
              );
            }}
          />
        </Section.Root>
        <Section.Root>
          <Section.Header>Visual explainers</Section.Header>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={() => {
              return (
                <Card
                  style={{
                    height: 150,
                    aspectRatio: 1,
                  }}
                />
              );
            }}
          />
        </Section.Root>
      </Screen.ScrollView>
    </Screen>
  );
}
