import { PageHeader } from '@app/components/shared/pageHeader/PageHeader';
import { useTranslation } from 'react-i18next';

const Superheroes = () => {
  const { t } = useTranslation();

  return (
    <div className="text-pink-700">
      <PageHeader>
        <h2 className="text-2xl text-pink-700">{t('translation:superheroes.title')}</h2>
      </PageHeader>
      <p>{t('translation:common.work-in-progress')}</p>
    </div>
  );
};

export default Superheroes;
