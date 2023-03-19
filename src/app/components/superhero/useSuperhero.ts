import { useQuery } from '@tanstack/react-query';
import { Superhero } from 'src/api/contracts/superhero';
import { superheroRequest } from 'src/api/queryFunctions/superhero';

export const useSuperhero = (id: number) => {
  const { data, isError, isLoading } = useQuery<Superhero[]>(['superhero', id], () => superheroRequest({ id: [id] }), {
    enabled: !!id,
  });

  return { superhero: data?.[0], isError, isLoading };
};
