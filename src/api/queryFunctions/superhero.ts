import { QueryFunctionContext } from '@tanstack/react-query';
import { Superhero, SuperHeroesResponse, TOTAL_COUNT_HEADER_NAME } from 'src/api/contracts/superhero';
import { getRequest } from '../http';

export const ROWS_PER_PAGE = 20;

export interface QueryParams {
  _page: number;
  _limit: number;
  name?: string;
  [key: string]: string | number | undefined;
}

export const superheroesRequest = ({
  queryKey: [, page, name],
}: QueryFunctionContext<Readonly<[string, number | undefined, string | undefined]>>) =>
  getRequest<SuperHeroesResponse, QueryParams>(
    'heroes',
    {
      _page: page ?? 1,
      _limit: ROWS_PER_PAGE,
      name,
    },
    TOTAL_COUNT_HEADER_NAME
  );

export const superheroRequest = ({ id }: { id: number[] }) =>
  getRequest<Superhero[], { id: number[] }>('heroes', {
    id,
  });
