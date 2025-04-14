const classifyTriangle = require('../classifyTriangle');

describe("Triangle Classification Tests", () => {
  test("Equilateral triangle", () => {
    expect(classifyTriangle(3, 3, 3)).toBe("Equilateral");
  });

  test("Isosceles triangle (5, 5, 8)", () => {
    expect(classifyTriangle(5, 5, 8)).toBe("Isosceles");
  });

  test("Isosceles triangle (8, 5, 5)", () => {
    expect(classifyTriangle(8, 5, 5)).toBe("Isosceles");
  });

  test("Scalene triangle (4, 5, 6)", () => {
    expect(classifyTriangle(4, 5, 6)).toBe("Scalene");
  });

  test("Right triangle (3, 4, 5)", () => {
    expect(classifyTriangle(3, 4, 5)).toBe("Scalene");
  });

  test("Right triangle (5, 12, 13)", () => {
    expect(classifyTriangle(5, 12, 13)).toBe("Scalene");
  });

  test("One side is zero", () => {
    expect(classifyTriangle(0, 4, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("One side is too large", () => {
    expect(classifyTriangle(201, 100, 100)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Negative side value", () => {
    expect(classifyTriangle(-3, 4, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Fails triangle inequality", () => {
    expect(classifyTriangle(1, 2, 3)).toBe("Not a Triangle");
  });

  test("All sides zero", () => {
    expect(classifyTriangle(0, 0, 0)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Two sides zero", () => {
    expect(classifyTriangle(0, 0, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Floating point scalene", () => {
    expect(classifyTriangle(3.1, 4.2, 5.3)).toBe("Scalene");
  });

  test("Floating point isosceles", () => {
    expect(classifyTriangle(2.5, 2.5, 4)).toBe("Isosceles");
  });

  test("Very large values", () => {
    expect(classifyTriangle(1e308, 1e308, 1e308)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("String input ('a', 4, 5)", () => {
    expect(classifyTriangle("a", 4, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("All string inputs ('a', 'b', 'c')", () => {
    expect(classifyTriangle("a", "b", "c")).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("NaN input", () => {
    expect(classifyTriangle(NaN, 4, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Undefined input", () => {
    expect(classifyTriangle(undefined, 4, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });

  test("Null input", () => {
    expect(classifyTriangle(null, 4, 5)).toBe("Error: Input conditions C1, C2, or C3 failed.");
  });
});

