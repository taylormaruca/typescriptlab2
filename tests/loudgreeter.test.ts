import { LoudGreeter } from "../src/loudgreeter";

describe("loudgreeter testing", () => {
    test("return Hello, Taylor with 4 exclamation points)", () => {
      const loudGreeting: LoudGreeter = new LoudGreeter("Hello");
      loudGreeting.addVolume();
      expect(loudGreeting.greet("Taylor")).toBe("Hello, Taylor!!!!");
    });
    test("return Hello, Taylor with 4 exclamation points)", () => {
        const loudGreeting: LoudGreeter = new LoudGreeter("Hey there");
        loudGreeting.addVolume();
        loudGreeting.addVolume();
        loudGreeting.addVolume();
        loudGreeting.addVolume();
        expect(loudGreeting.greet("Brice")).toBe("Hey there, Brice!!!!!!!");
      });
  });