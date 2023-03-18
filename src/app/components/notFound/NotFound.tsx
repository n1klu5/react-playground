import { ROUTES } from '@app/shared/routes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('translation:not-found:title')}</h1>
      <p>{t('translation:not-found:explanation-message')}</p>
      <Link to={ROUTES.superheroes}>
        <button className="capitalize">{t('translation:not-found:go-home')}</button>
      </Link>
    </main>
  );
};

export default NotFound;
