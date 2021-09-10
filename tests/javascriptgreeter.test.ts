import JavaScriptGreeter from "../src/javascriptgreeter";

describe("get the javascript greeting", () => {
  test("return console.log('Hello, Taylor!')", () => {
    const greeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(greeting.greet("Taylor")).toBe("console.log('Hello, Taylor!')");
  });
  test("return console.log('Hello, Millie!')", () => {
    const greeting: JavaScriptGreeter = new JavaScriptGreeter("Good day");
    expect(greeting.greet("Millie")).toBe("console.log('Good day, Millie!')");
  });
  test("return console.log('Howdy, Max!')", () => {
    const greeting: JavaScriptGreeter = new JavaScriptGreeter("Howdy");
    expect(greeting.greet("Max")).toBe("console.log('Howdy, Max!')");
  });
});

//expect(new JavaScriptGreeter('howdy').greet('hunter').toBe("console.log('howdy, hunter')")