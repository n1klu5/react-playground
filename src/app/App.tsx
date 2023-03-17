import { useEffect } from 'react';
import { superherosRequest } from 'src/api/queryFunctions/superhero';

export const App = () => {
  useEffect(() => {
    const load = async () => await superherosRequest.getRequest();
    load();
  }, []);

  return <main />;
};
