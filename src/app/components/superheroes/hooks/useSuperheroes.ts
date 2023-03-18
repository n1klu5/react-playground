import { useQuery } from '@tanstack/react-query';
import { Superhero } from 'src/api/contracts/superhero';
import { superherosRequest } from 'src/api/queryFunctions/superhero';

export const useSuperheroes = () => {
  const { data, isLoading, isError } = useQuery<Superhero[]>(
    superherosRequest.queryKeys,
    superherosRequest.getRequest,
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return {
    superheroes: data ?? [],
    isLoading,
    isError,
  };
};
