import { Button } from '@app/components/shared/button/Button';
import { Input } from '@app/components/shared/input/Input';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ROWS_PER_PAGE } from 'src/api/queryFunctions/superhero';

interface Props {
  currentPageNumber: number | undefined;
  totalNumberOfPages: number;
  onChange: (newPageNumber: number | undefined) => void;
}

export const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }: Props) => {
  const { t } = useTranslation();

  const previousPageDisabled = currentPageNumber === 1;
  const nextPageDisabled = currentPageNumber === totalNumberOfPages;

  const previousPage = () => {
    const newPage = Math.max(0, (currentPageNumber ?? 0) - 1);
    onChange(newPage);
  };

  const nextPage = () => {
    const newPage = Math.min(totalNumberOfPages, (currentPageNumber ?? 0) + 1);
    onChange(newPage);
  };

  const onChangePage = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const pageNumber = parseInt(value, 10);
    onChange(pageNumber);
  };

  return (
    <div className="flex items-center gap-2">
      <span>
        {t('translation:common.items-per-page', {
          itemsPerPage: ROWS_PER_PAGE,
        })}
      </span>
      <div className="flex items-center gap-2">
        <Button onClick={previousPage} disabled={previousPageDisabled}>
          {t('translation:common.previous')}
        </Button>
        <Input
          type="number"
          disabled={previousPageDisabled && nextPageDisabled}
          min="1"
          max={totalNumberOfPages}
          value={currentPageNumber ?? 0 + 1}
          onChange={onChangePage}
        />
        <span>{t('translation:common.of-count', { totalNumberOfPages })}</span>
        <Button onClick={nextPage} disabled={nextPageDisabled}>
          {t('translation:common.next')}
        </Button>
      </div>
    </div>
  );
};
