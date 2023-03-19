import { ROUTES } from '@app/shared/routes';
import { generatePath, useNavigate } from 'react-router';
import { Superhero } from 'src/api/contracts/superhero';

export const NUMBER_OF_COLUMNS = 3;

interface Props {
  superhero: Superhero;
}

export const Row = ({ superhero }: Props) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(generatePath(ROUTES.superhero, { id: superhero.id }))}
      className="h-fit cursor-pointer odd:bg-pink-100 even:bg-white"
    >
      <td className="text-center">{superhero.id}</td>
      <td className="whitespace-nowrap text-left">{superhero.name}</td>
      <td>
        <img src={superhero.images.xs} alt={superhero.name} width="50" height="50" />
      </td>
    </tr>
  );
};
