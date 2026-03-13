import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [2, 6];
  const expected: number = 4;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});
