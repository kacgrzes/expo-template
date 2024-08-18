import { Button, withModalStatusBar } from "@mobile/components";
import { Link } from "expo-router";

function Modal() {
  return (
    <Link href="/full-screen-modal" asChild>
      <Button title="Full screen modal" variant="link" full />
    </Link>
  );
}

export default withModalStatusBar(Modal);
