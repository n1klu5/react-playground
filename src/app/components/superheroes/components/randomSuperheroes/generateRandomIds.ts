const getRandomNumberBetween = (minValue: number, maxValue: number) =>
  Math.floor(Math.random() * (maxValue - minValue)) + minValue;

const adjustRandomNumber = (currentNumber: number, compareToNumber: number) =>
  currentNumber === compareToNumber ? currentNumber + 1 : currentNumber;

export const generateRandomIds = (total: number) => {
  if (total <= 0) {
    return [];
  }

  const randomId1 = getRandomNumberBetween(1, total);
  const randomId2 = adjustRandomNumber(getRandomNumberBetween(1, total), randomId1);
  const randomId3 = adjustRandomNumber(adjustRandomNumber(getRandomNumberBetween(1, total), randomId1), randomId2);

  return [randomId1, randomId2, randomId3];
};
