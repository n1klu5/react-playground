import Layout from '@app/components/shared/layout/Layout';
import { Page } from '@app/components/shared/page/Page';
import { ROUTES } from '@app/shared/routes';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { superherosRequest } from 'src/api/queryFunctions/superhero';

export const Superheroes = lazy(() => import('./components/superheroes/Superheroes'));
export const Superhero = lazy(() => import('./components/superhero/Superhero'));
export const NotFound = lazy(() => import('./components/notFound/NotFound'));

export const App = () => {
  useEffect(() => {
    const load = async () => await superherosRequest.getRequest();
    load();
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.notFound} element={<NotFound />} />
      <Route element={<Layout />}>
        <Route
          path={ROUTES.superheroes}
          element={
            <Page>
              <Superheroes />
            </Page>
          }
        />
        <Route
          path={ROUTES.superhero}
          element={
            <Page>
              <Superhero />
            </Page>
          }
        />
        <Route path="/" element={<Navigate to={ROUTES.superheroes} replace={true} />} />
        <Route path="*" element={<Navigate to={ROUTES.notFound} replace={true} />} />
      </Route>
    </Routes>
  );
};
