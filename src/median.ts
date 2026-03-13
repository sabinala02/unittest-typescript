export function median(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate the median of an empty array");
    }
    const sortedNumbers: number[] = [...numbers].sort((a, b) => a - b);
    const middleIndex: number = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    }
    return sortedNumbers[middleIndex];
}