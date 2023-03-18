import { useTranslation } from 'react-i18next';

const Superheroes = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('translation:superheroes.title')}</h1>
      <p>{t('translation:common.work-in-progress')}</p>
    </div>
  );
};

export default Superheroes;
