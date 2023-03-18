import { Button } from '@app/components/shared/button/Button';
import { ROUTES } from '@app/shared/routes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="flex h-[100vh] w-full flex-col items-center justify-center gap-2">
      <h1 className="text-4xl text-pink-700">{t('translation:not-found:title')}</h1>
      <p className="text-base text-pink-700">{t('translation:not-found:explanation-message')}</p>
      <Link to={ROUTES.superheroes}>
        <Button className="uppercase">{t('translation:not-found:go-home')}</Button>
      </Link>
    </main>
  );
};

export default NotFound;
