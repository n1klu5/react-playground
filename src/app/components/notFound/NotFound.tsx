import { ROUTES } from '@app/shared/routes';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <h1>{'Not found'}</h1>
      <p>{"Sorry, the page you've requested could not be found."}</p>
      <Link to={ROUTES.superheroes}>
        <button>GO HOME</button>
      </Link>
    </main>
  );
};

export default NotFound;
