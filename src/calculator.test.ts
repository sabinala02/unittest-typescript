import { add, divide, multiply, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 4;
  const b: number = 6;
  const expected: number = 10;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply four by six is twenty-four", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 24;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide four by six is two-thirds", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 3/2;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide four by zero throws exception", () => {
  // Arrange
  const a: number = 6;
  const b: number = 0;

  // Act

  // Assert
  expect(() => divide(a, b)).toThrow(new Error("Division by zero is not allowed."));
});