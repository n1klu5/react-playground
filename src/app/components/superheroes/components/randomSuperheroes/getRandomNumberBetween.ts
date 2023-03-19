export const getRandomNumberBetween = (minValue: number, maxValue: number) =>
  Math.floor(Math.random() * (maxValue - minValue)) + minValue;
