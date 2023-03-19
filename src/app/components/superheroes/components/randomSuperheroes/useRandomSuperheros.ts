import { getRandomNumberBetween } from '@app/components/superheroes/components/randomSuperheroes/getRandomNumberBetween';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Superhero } from 'src/api/contracts/superhero';
import { superheroRequest } from 'src/api/queryFunctions/superhero';

const adjustRandomNumber = (currentNumber: number, compareToNumber: number) =>
  currentNumber === compareToNumber ? currentNumber + 1 : currentNumber;

const generateRandomIds = (total: number) => {
  const randomId1 = getRandomNumberBetween(1, total);
  const randomId2 = adjustRandomNumber(getRandomNumberBetween(1, total), randomId1);
  const randomId3 = adjustRandomNumber(adjustRandomNumber(getRandomNumberBetween(1, total), randomId1), randomId2);

  return [randomId1, randomId2, randomId3];
};

export const useRandomSuperheros = (total: number) => {
  const [randomIds, setRandomIds] = useState<number[]>(generateRandomIds(total));
  const { data, isError, isLoading } = useQuery<Superhero[]>(
    ['superhero', 'random'],
    () => superheroRequest({ id: randomIds }),
    {
      enabled: !!total && randomIds.length === 3,
      refetchInterval: 15000,
      onSuccess: () => {
        setRandomIds(generateRandomIds(total));
      },
    }
  );

  return { randomSuperheroes: data ?? [], isError, isLoading };
};
