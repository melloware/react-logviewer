import { parseLinks } from "./utils";

describe("Parsing lines with links", () => {
  it("should be able to parse links wrapped in parentheses.", () => {
    const lines = [
      {
        text: "(https://example.com)",
      },
    ];
    const links = parseLinks(lines);
    expect(links.length).toBe(4);
    expect(links[0]?.text).toBeFalsy();
    expect(links[1]?.text).toBe("(");
    expect(links[2]?.text?.endsWith(")")).toBeFalsy();
    expect(links[3]?.text).toBe(")");
  });

  it("should be able to parse links starting with a parenthesis.", () => {
    const lines = [
      {
        text: "(https://example.com",
      },
    ];
    const links = parseLinks(lines);
    expect(links.length).toBe(3);
    expect(links[0]?.text).toBeFalsy();
    expect(links[1]?.text).toBe("(");
    expect(links[2]?.text?.endsWith(")")).toBeFalsy();
  });

  it("should be able to parse links with a trailing parenthesis.", () => {
    const lines = [
      {
        text: "https://example.com)",
      },
    ];
    const links = parseLinks(lines);
    expect(links.length).toBe(3);
    expect(links[0]?.text).toBeFalsy(); //
    expect(links[1]?.text?.endsWith(")")).toBeFalsy(); //
    expect(links[2]?.text).toBe(")");
  });
});

describe("", () => {
  it("", () => {
    const lines = [
      {
        text: "aaa bbb ccc",
      },
      {
        text: "wrap1 'http://bla.alb/add' wrap2 wrap3",
      },
      {
        text: "�[31m�[1m>�[22m�[2m�[39m�[90m �[36mthis�[39m�[33m.�[39mextend(�[36mthis",
      },
    ];
    const links = parseLinks(lines);
    expect(links[0]?.text).toBe("aaa bbb ccc");
    //
  });
});
