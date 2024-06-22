export async function enableMocking() {
  if (!__DEV__) {
    return;
  }

  await import("./polyfills");
  const { server } = await import("./server");
  server.listen();
}
