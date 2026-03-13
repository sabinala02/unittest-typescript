import { median } from "./median";

test("test median for odd number of elements", () => {
    // Arrange
    const numbers: number[] = [2, 6, 4];
    const expected: number = 4;

    // Act
    const actual: number = median(numbers);

    // Assert
    expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
    // Arrange
    const numbers: number[] = [2, 6, 4, 8];
    const expected: number = 5;

    // Act
    const actual: number = median(numbers);
    
    // Assert
    expect(actual).toBe(expected);
});

test("test median for no number of elements", () => {
    // Arrange
    const numbers: number[] = [];
    const expected: Error = new Error("Cannot calculate the median of an empty array");

    // Act

    // Assert
    expect(() => median(numbers)).toThrow(expected);
});
