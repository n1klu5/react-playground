import { useTranslation } from 'react-i18next';

const Superheroe = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('translation:superheroe:title')}</h1>
      <p>{t('translation:common:work-in-progress')}</p>
    </div>
  );
};

export default Superheroe;
