it("receives a mocked response to a REST API request", async () => {
  const response = await fetch("https://example.com/user");

  expect(response.status).toBe(200);
  expect(response.statusText).toBe("OK");
  expect(await response.json()).toEqual({
    id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
    firstName: "John",
    lastName: "Maverick",
  });
});
