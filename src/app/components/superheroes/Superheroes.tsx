import { Error } from '@app/components/shared/error/Error';
import { PageHeader } from '@app/components/shared/pageHeader/PageHeader';
import { RandomSuperheroes } from '@app/components/superheroes/components/randomSuperheroes/RandomSuperheroes';
import { Search } from '@app/components/superheroes/components/Search';
import { Pagination } from '@app/components/superheroes/components/table/Pagination';
import { Table } from '@app/components/superheroes/components/table/Table';
import { useSuperheroes } from '@app/components/superheroes/useSuperheroes';
import { useTranslation } from 'react-i18next';

const Superheroes = () => {
  const { t } = useTranslation();
  const {
    superheroes,
    isError,
    isLoading,
    currentPageNumber,
    totalCount,
    totalNumberOfPages,
    setCurrentPageNumber,
    name,
    setName,
  } = useSuperheroes();

  return (
    <div className="mb-4 flex flex-col p-4">
      <PageHeader>
        <h2 className="text-2xl uppercase text-pink-700">{t('translation:superheroes.title')}</h2>
      </PageHeader>
      {isError ? (
        <Error>{t('translation:common.error')}</Error>
      ) : (
        <div className="flex h-[calc(100vh_-_var(--topbar-height)-_var(--page-header-height)-4rem)] w-full flex-col items-center gap-4 overflow-hidden">
          <RandomSuperheroes totalCount={totalCount} />
          <Search searchName={name} onChangeSearch={setName} />
          <div className="scrollbar flex h-full w-full border-b border-pink-800 scrollbar-track-mt-[2.5rem] md:w-6/12">
            <Table superheroes={superheroes} isLoading={isLoading} />
          </div>
          <Pagination
            currentPageNumber={currentPageNumber}
            totalNumberOfPages={totalNumberOfPages}
            onChange={setCurrentPageNumber}
          />
        </div>
      )}
    </div>
  );
};

export default Superheroes;
