import testor from "./index";

describe("Testor", () => {
  test('"apples,bananas,oranges" should result in {0: "apples",1: "bananas",2: "oranges"}', () => {
    expect(testor("apples,bananas,oranges")).toStrictEqual({
      0: "apples",
      1: "bananas",
      2: "oranges",
    });
  });
});
