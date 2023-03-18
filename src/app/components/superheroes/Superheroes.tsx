import { Error } from '@app/components/shared/error/Error';
import { PageHeader } from '@app/components/shared/pageHeader/PageHeader';
import { Table } from '@app/components/superheroes/components/table/Table';
import { useSuperheroes } from '@app/components/superheroes/hooks/useSuperheroes';
import { useTranslation } from 'react-i18next';

const Superheroes = () => {
  const { t } = useTranslation();
  const { superheroes, isError, isLoading } = useSuperheroes();

  return (
    <div className="flex flex-col text-pink-700 ">
      <PageHeader>
        <h2 className="text-2xl text-pink-700">{t('translation:superheroes.title')}</h2>
      </PageHeader>
      {isError ? (
        <Error>{t('translation:common.error')}</Error>
      ) : (
        <div className="flex h-[calc(100vh_-_var(--topbar-height)-_var(--page-header-height))] w-full justify-center overflow-hidden">
          <div className="scrollbar flex h-full scrollbar-track-mt-[2.5rem]">
            <Table superheroes={superheroes} isLoading={isLoading} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Superheroes;
