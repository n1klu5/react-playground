import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { t } = useTranslation();

  return (
    <main className="grid grid-rows-[var(--topbar-height)_auto]">
      <header className="bg-pink-700 p-2">
        <h1 className="text-base text-white">{t('translation:common.title')}</h1>
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;
