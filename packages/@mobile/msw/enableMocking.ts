import { isDevelopment } from "@common/utils";

export async function enableMocking() {
  if (!isDevelopment) {
    return;
  }

  await import("./polyfills");
  const { server } = await import("./server");
  server.listen({ onUnhandledRequest: "bypass" });
  return true;
}
