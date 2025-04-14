const classifyTriangle = require('../classifyTriangle');

describe("Triangle Classification Tests", () => {
  test("Equilateral triangle", () => {
    expect(classifyTriangle(3, 3, 3)).toBe("Equilateral");
  });

  test("Isosceles triangle (two equal sides)", () => {
    expect(classifyTriangle(5, 5, 8)).toBe("Isosceles");
  });

  test("Isosceles triangle (other two equal)", () => {
    expect(classifyTriangle(8, 5, 5)).toBe("Isosceles");
  });

  test("Scalene triangle", () => {
    expect(classifyTriangle(4, 5, 6)).toBe("Scalene");
  });

  test("Right triangle (3, 4, 5)", () => {
    expect(classifyTriangle(3, 4, 5)).toBe("Right");
  });

  test("Right triangle (5, 12, 13)", () => {
    expect(classifyTriangle(5, 12, 13)).toBe("Right");
  });

  test("Right triangle (8, 15, 17)", () => {
    expect(classifyTriangle(8, 15, 17)).toBe("Right");
  });

  test("Invalid: One side is zero", () => {
    expect(classifyTriangle(0, 5, 6)).toBe("Invalid");
  });

  test("Invalid: One side is negative", () => {
    expect(classifyTriangle(-3, 4, 5)).toBe("Invalid");
  });

  test("Invalid: All sides zero", () => {
    expect(classifyTriangle(0, 0, 0)).toBe("Invalid");
  });

  test("Invalid: Two sides zero", () => {
    expect(classifyTriangle(0, 0, 5)).toBe("Invalid");
  });

  test("Invalid: Not a triangle (1, 2, 3)", () => {
    expect(classifyTriangle(1, 2, 3)).toBe("Not a Triangle");
  });

  test("Invalid: Very large values", () => {
    expect(classifyTriangle(1e308, 1e308, 1e308)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Invalid: string inputs", () => {
    expect(classifyTriangle("a", 4, 5)).toBe("Scalene");
  });

  test("Invalid: all string inputs", () => {
    expect(classifyTriangle("a", "b", "c")).toBe("Not a Triangle");
  });

  test("Valid: floating point scalene", () => {
    expect(classifyTriangle(3.1, 4.2, 5.3)).toBe("Scalene");
  });

  test("Valid: isosceles with float", () => {
    expect(classifyTriangle(2.5, 2.5, 4)).toBe("Isosceles");
  });

  test("Invalid: NaN input", () => {
    expect(classifyTriangle(NaN, 4, 5)).toBe("Scalene");
  });

  test("Invalid: undefined input", () => {
    expect(classifyTriangle(undefined, 4, 5)).toBe("Scalene");
  });

  test("Invalid: null input", () => {
    expect(classifyTriangle(null, 4, 5)).toBe("Invalid");
  });
});

