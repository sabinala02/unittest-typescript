export function mean(numbers: number[]): number {
  let sum: number = 0;

  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty array");
  } else {

    for (let number of numbers) {
      sum += number;
    }
    const mean: number = sum / numbers.length;
    return mean;
  }
}
