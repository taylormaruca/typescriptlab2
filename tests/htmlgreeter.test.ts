import { HTMLGreeter } from "../src/htmlgreeter";

describe("htmlgreeter testing", () => {
    test("return Hello, Taylor wrapped in h1 tag)", () => {
      const htmlGreeting: HTMLGreeter = new HTMLGreeter("Hello");
      expect(htmlGreeting.greet("Taylor")).toBe("<h1>Hello, Taylor!</h1>");
    });

    test("return Hello, Taylor wrapped in h1 tag)", () => {
        const htmlGreeting: HTMLGreeter = new HTMLGreeter("What's up");
        htmlGreeting.tagName = 'p'
        expect(htmlGreeting.greet("Brice")).toBe("<p>What's up, Brice!</p>");
      });
  });