import { Error } from '@app/components/shared/error/Error';
import { PageHeader } from '@app/components/shared/pageHeader/PageHeader';
import { Spinner } from '@app/components/shared/spinner/Spinner';
import { SuperheroDetails } from '@app/components/superhero/components/SuperheroDetails';
import { useSuperhero } from '@app/components/superhero/useSuperhero';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Superhero = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, superhero } = useSuperhero(parseInt(id ?? '0'));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !superhero) {
    return <Error>{t('translation:common.error')}</Error>;
  }

  return (
    <div className="mb-4 flex flex-col p-4">
      <PageHeader>
        <h2 className="text-xl text-pink-700">{t('translation:superhero:title', { name: superhero?.name })}</h2>
      </PageHeader>
      <SuperheroDetails superhero={superhero} />
    </div>
  );
};

export default Superhero;
