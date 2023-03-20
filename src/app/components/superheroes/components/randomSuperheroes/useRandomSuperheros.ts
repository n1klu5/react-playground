import { generateRandomIds } from '@app/components/superheroes/components/randomSuperheroes/generateRandomIds';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Superhero } from 'src/api/contracts/superhero';
import { superheroRequest } from 'src/api/queryFunctions/superhero';

export const useRandomSuperheros = (total: number) => {
  const [randomIds, setRandomIds] = useState<number[]>(() => generateRandomIds(total));
  const { data, isError, isLoading } = useQuery<Superhero[]>(
    ['superhero', 'random'],
    () => superheroRequest({ id: randomIds }),
    {
      enabled: total > 0 && randomIds.length === 3,
      refetchInterval: 15000,
      onSuccess: () => {
        setRandomIds(generateRandomIds(total));
      },
    }
  );

  return { randomSuperheroes: data ?? [], isError, isLoading };
};
