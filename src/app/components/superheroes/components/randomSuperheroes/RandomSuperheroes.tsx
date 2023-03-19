import { Error } from '@app/components/shared/error/Error';
import { Spinner } from '@app/components/shared/spinner/Spinner';
import { useTranslation } from 'react-i18next';
import { useRandomSuperheros } from './useRandomSuperheros';

interface Props {
  totalCount: number;
}

export const RandomSuperheroes = ({ totalCount }: Props) => {
  const { t } = useTranslation();
  const { isError, isLoading, randomSuperheroes } = useRandomSuperheros(totalCount);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error>{t('translation:common.error')}</Error>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-xl text-pink-700">{t('translation:superheroes.random')}</h3>
      <div className="grid grid-cols-3 gap-4">
        {randomSuperheroes.map((superhero) => (
          <div key={`random-${superhero.id}`}>
            <p>{superhero.name}</p>
            <img src={superhero.images.xs} alt={superhero.name} width="50" height="50" />
          </div>
        ))}
      </div>
    </div>
  );
};
