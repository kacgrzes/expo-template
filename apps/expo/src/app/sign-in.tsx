import { Box } from "@grapp/stacks";
import { useSession } from "@mobile/auth";
import {
  Button,
  PagerView,
  Screen,
  usePagerScrollHandler,
} from "@mobile/components";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useSession();

  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      "worklet";
      console.log(e.offset, e.position);
    },
  });

  return (
    <Screen
      footer={
        <Box padding={4}>
          <Button title="Continue" />
        </Box>
      }
    >
      <PagerView initialPage={0} style={{ flex: 1 }} onPageScroll={handler}>
        <Box flex={"fluid"} alignX={"center"} alignY={"center"}>
          <Button
            title="Sign in"
            onPress={() => {
              signIn();
              // Navigate after signing in. You may want to tweak this to ensure sign-in is
              // successful before navigating.
              router.replace("/");
            }}
          />
        </Box>
        <Box flex={"fluid"} alignX={"center"} alignY={"center"}>
          <Button
            title="Sign in"
            onPress={() => {
              signIn();
              // Navigate after signing in. You may want to tweak this to ensure sign-in is
              // successful before navigating.
              router.replace("/");
            }}
          />
        </Box>
      </PagerView>
    </Screen>
  );
}
