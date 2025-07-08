import { Box } from "@grapp/stacks";
import { useSession } from "@mobile/auth";
import {
  AppleAuthenticationButton,
  Button,
  Form,
  GoogleAuthenticationButton,
  Link,
  Pager,
  Screen,
  Text,
  usePagerViewRef,
} from "@mobile/components";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useSession();

  const pagerViewRef = usePagerViewRef();

  return (
    <Pager.Root>
      <Screen
        edges={["top", "bottom"]}
        footer={
          <Box padding={4} alignX={"center"} gap={3}>
            <Pager.Control />
            <AppleAuthenticationButton full />
            <GoogleAuthenticationButton full />
            <Button
              full
              title="Continue"
              onPress={() => {
                pagerViewRef.current?.nextPage();
              }}
            />
          </Box>
        }
      >
        <Pager.Container ref={pagerViewRef}>
          <Screen.ScrollView>
            <Form.Root>
              <Form.Field name="email">
                <Form.Label>Email</Form.Label>
                <Form.TextInput />
              </Form.Field>
              <Form.Field name="password">
                <Form.Label>Password</Form.Label>
                <Form.PasswordInput />
              </Form.Field>
              <Form.Submit />
              <Button
                title="Sign in"
                onPress={() => {
                  signIn();
                  // Navigate after signing in. You may want to tweak this to ensure sign-in is
                  // successful before navigating.
                  router.replace("/");
                }}
              />
            </Form.Root>
          </Screen.ScrollView>
          <Pager.Page>
            <Screen.ScrollView contentContainerStyle={{ gap: 16 }}>
              <Text>
                The sun set over the horizon, casting a warm, golden hue across
                the tranquil village. Birds chirped their evening songs as the
                gentle breeze rustled through the leaves of ancient oak trees.
                Children laughed and played in the open fields, their carefree
                voices echoing in the twilight. As the day drew to a close, the
                villagers gathered in the central square, exchanging stories of
                the day's events and plans for the future. The scent of freshly
                baked bread wafted through the air, mingling with the earthy{" "}
                <Link
                  onPress={() => {
                    alert("Link pressed!");
                  }}
                >
                  aroma of the nearby
                </Link>{" "}
                forest.
              </Text>
              <Text>
                In the heart of the village, an old clock tower stood as a
                testament to the passage of time. Its weathered face and hands
                moved steadily, marking each moment with quiet precision.
                Beneath its shadow, the cobblestone streets were lined with
                quaint cottages adorned with vibrant flowers. Lanterns flickered
                to life, illuminating the pathways and creating a magical
                ambiance. The village, nestled in a valley surrounded by rolling
                hills, seemed like a world untouched by the hustle and bustle of
                modern life. Here, in this peaceful haven, time moved at its own
                gentle pace, and the simple joys of community and nature were
                cherished above all else.
              </Text>
              <Button
                title="Sign in"
                onPress={() => {
                  signIn();
                  // Navigate after signing in. You may want to tweak this to ensure sign-in is
                  // successful before navigating.
                  router.replace("/");
                }}
              />
            </Screen.ScrollView>
          </Pager.Page>
          <Pager.Page alignX="center" alignY="center">
            <Button
              title="Sign in"
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            />
          </Pager.Page>
          <Pager.Page alignX="center" alignY="center">
            <Button
              title="Sign in"
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            />
          </Pager.Page>
          <Pager.Page alignX="center" alignY="center">
            <Button
              title="Sign in"
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            />
          </Pager.Page>
          <Pager.Page alignX="center" alignY="center">
            <Button
              title="Sign in"
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            />
          </Pager.Page>
          <Pager.Page alignX="center" alignY="center">
            <Button
              title="Sign in"
              onPress={() => {
                signIn();
                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                // successful before navigating.
                router.replace("/");
              }}
            />
          </Pager.Page>
          <Pager.Page alignX="center" alignY="center">
            <Button
              title="Go to page 2"
              onPress={() => {
                pagerViewRef.current?.setPage(1);
              }}
            />
          </Pager.Page>
        </Pager.Container>
      </Screen>
    </Pager.Root>
  );
}
