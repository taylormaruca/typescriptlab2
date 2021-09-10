import Greeter from "../src/greeter";

describe("get the greeting", () => {
  test("return Good evening, Taylor!", () => {
    const greeting: Greeter = new Greeter ("Good evening");
    expect(greeting.greet("Taylor")).toBe("Good evening, Taylor!");
  });
  test("return Hello, Millie!", () => {
    const greeting: Greeter = new Greeter ("Hello");
    expect(greeting.greet("Millie")).toBe("Hello, Millie!");
  });
  test("return Howdy, Max!", () => {
    const greeting: Greeter = new Greeter("Howdy");
    expect(greeting.greet("Max")).toBe("Howdy, Max!");
  });
});
