import { ROUTES } from '@app/shared/routes';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { superherosRequest } from 'src/api/queryFunctions/superhero';

export const Layout = lazy(() => import('./components/shared/layout/Layout'));
export const Superheroes = lazy(() => import('./components/superheroes/Superheroes'));
export const Superheroe = lazy(() => import('./components/superheroe/Superheroe'));
export const NotFound = lazy(() => import('./components/notFound/NotFound'));

export const App = () => {
  useEffect(() => {
    const load = async () => await superherosRequest.getRequest();
    load();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.superheroes} element={<Superheroes />} />
        <Route path={ROUTES.superheroe} element={<Superheroe />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
        <Route path="/" element={<Navigate to={ROUTES.superheroes} replace={true} />} />
        <Route path="*" element={<Navigate to={ROUTES.notFound} replace={true} />} />
      </Route>
    </Routes>
  );
};
