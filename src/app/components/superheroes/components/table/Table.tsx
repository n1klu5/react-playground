import { Spinner } from '@app/components/shared/spinner/Spinner';
import { Body } from '@app/components/superheroes/components/table/Body';
import { NUMBER_OF_COLUMNS } from '@app/components/superheroes/components/table/Row';
import { useTranslation } from 'react-i18next';
import { Superhero } from 'src/api/contracts/superhero';

interface Props {
  isLoading?: boolean;
  superheroes: Superhero[];
}

export const Table = ({ isLoading, superheroes }: Props) => {
  const { t } = useTranslation();

  const headers = [t('translation:superheroes.id'), t('translation:superheroes.name'), ''];

  return (
    <table className="h-fit min-w-full bg-white">
      <thead className="sticky top-0 z-10 border-b border-pink-700 bg-pink-300 ">
        <tr>
          {headers.map((header) => (
            <th key={header} className="p-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="h-fit">
        {isLoading ? (
          <tr>
            <td colSpan={NUMBER_OF_COLUMNS}>
              <Spinner />
            </td>
          </tr>
        ) : (
          <Body superheroes={superheroes} />
        )}
      </tbody>
    </table>
  );
};
