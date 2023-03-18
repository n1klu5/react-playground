import { Spinner } from '@app/components/shared/spinner/Spinner';
import { Body } from '@app/components/superheroes/components/table/Body';
import { useTranslation } from 'react-i18next';
import { Superhero } from 'src/api/contracts/superhero';

interface Props {
  isLoading?: boolean;
  superheroes: Superhero[];
}

export const Table = ({ isLoading, superheroes }: Props) => {
  const { t } = useTranslation();

  const headers = [t('translation:superheroes.position'), t('translation:superheroes.name'), ''];

  return (
    <table className="h-full">
      <thead className="sticky top-0 z-10 border-b border-pink-700 bg-pink-300 ">
        <tr>
          {headers.map((header) => (
            <th key={header} className="p-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{isLoading ? <Spinner /> : <Body superheroes={superheroes} />}</tbody>
    </table>
  );
};
