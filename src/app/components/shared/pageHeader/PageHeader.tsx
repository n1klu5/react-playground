import { Button } from '@app/components/shared/button/Button';
import { Icon } from '@app/components/shared/icon/Icon';
import { ROUTES } from '@app/shared/routes';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  /** Component which will be displayed as title */
  children: ReactNode;
}

/**
 * PageHeader component
 *
 * Example:
 * ```js
 * <PageHeader>{t('common:routes.superhero')}</PageHeader>
 * ```
 */
export const PageHeader = ({ children }: Props) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isMainPathname = pathname === ROUTES.superheroes;

  return (
    <header className="flex h-[var(--page-header-height)] w-full items-center">
      <div className="flex w-full items-center gap-4">
        {isMainPathname ? null : (
          <Link to={ROUTES.superheroes}>
            <Button className="flex items-center gap-2">
              <Icon icon="Arrow" className="text-white" />
              <span className="hidden md:inline-block">{t('translation:common:back')}</span>
            </Button>
          </Link>
        )}
        <>{children}</>
      </div>
    </header>
  );
};
