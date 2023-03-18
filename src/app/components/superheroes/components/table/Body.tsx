import { useTranslation } from 'react-i18next';
import { Superhero } from 'src/api/contracts/superhero';
import { NUMBER_OF_COLUMNS, Row } from './Row';

interface Props {
  superheroes: Superhero[];
}

export const Body = ({ superheroes }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      {superheroes.length ? (
        superheroes.map((superhero, index) => <Row key={superhero.id} index={index + 1} superhero={superhero} />)
      ) : (
        <tr>
          <td colSpan={NUMBER_OF_COLUMNS}>
            <h4 className="my-4 flex flex-col items-center justify-center text-lg">
              <em className="mr-1">{t('translation:superheroes.no-results')}</em>
              <em>{t('translation:superheroes.narrow-filters')}</em>
            </h4>
          </td>
        </tr>
      )}
    </>
  );
};
