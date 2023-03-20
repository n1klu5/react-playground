import { useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { SuperHeroesResponse, TOTAL_COUNT_HEADER_NAME } from 'src/api/contracts/superhero';
import { ROWS_PER_PAGE, superheroesRequest } from 'src/api/queryFunctions/superhero';

export const useSuperheroes = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number | undefined>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const { data, isLoading, isError } = useQuery<SuperHeroesResponse>(
    ['heroes', currentPageNumber, name],
    superheroesRequest as () => Promise<SuperHeroesResponse>,
    {
      enabled: !!currentPageNumber,
      retry: false,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        if (totalCount === 0) {
          setTotalCount(data?.[TOTAL_COUNT_HEADER_NAME] ?? 0);
        }
      },
    }
  );

  const handleSetName = debounce((name: string | undefined) => {
    setCurrentPageNumber(1);
    setName(name?.length ? name : '');
  }, 500);

  const totalNumberOfPages = Math.ceil((data?.[TOTAL_COUNT_HEADER_NAME] ?? 0) / ROWS_PER_PAGE);

  return {
    superheroes: data?.data ?? [],
    isLoading,
    isError,
    currentPageNumber,
    setCurrentPageNumber,
    name,
    setName: handleSetName,
    totalCount,
    totalNumberOfPages,
  };
};
