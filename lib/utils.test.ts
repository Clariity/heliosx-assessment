import { capitalizeFirstLetter, titleCase } from "./utils";

describe("capitalizeFirstLetter", () => {
  it("capitalises the first letter of a word", () => {
    expect(capitalizeFirstLetter("foo")).toBe("Foo");
  });

  it("capitalises the first letter of the first word if multiple are passed", () => {
    expect(capitalizeFirstLetter("foo bar")).toBe("Foo bar");
  });

  it("leaves an already capitalized word as is", () => {
    expect(capitalizeFirstLetter("FOO")).toBe("FOO");
  });

  it("handles being passed a number as a string", () => {
    expect(capitalizeFirstLetter("1")).toBe("1");
  });
});

describe("titleCase", () => {
  it("capitalises the first letter of a word", () => {
    expect(titleCase("foo")).toBe("Foo");
  });

  it("capitalises the first letter of the all hyphenated words if multiple are passed", () => {
    expect(titleCase("foo-bar")).toBe("Foo Bar");
  });

  it("leaves an already capitalized word as is", () => {
    expect(titleCase("FOO")).toBe("FOO");
  });

  it("handles being passed a number as a string", () => {
    expect(titleCase("1")).toBe("1");
  });

  it("capitalises the first letter of the the first hyphenated words if multiple are passed with a space", () => {
    expect(titleCase("foo bar")).toBe("Foo bar");
  });
});
