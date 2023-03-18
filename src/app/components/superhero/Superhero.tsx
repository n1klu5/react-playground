import { PageHeader } from '@app/components/shared/pageHeader/PageHeader';
import { useTranslation } from 'react-i18next';

const Superhero = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader>
        <h2 className="text-xl text-pink-700">{t('translation:superhero:title')}</h2>
      </PageHeader>
      <p>{t('translation:common:work-in-progress')}</p>
    </div>
  );
};

export default Superhero;