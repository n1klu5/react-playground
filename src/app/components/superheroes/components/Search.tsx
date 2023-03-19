import { Input } from '@app/components/shared/input/Input';
import { ChangeEvent, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  searchName: string | undefined;
  onChangeSearch: (newSearchPhrase: string | undefined) => void;
}

export const Search = ({ searchName, onChangeSearch }: Props) => {
  const { t } = useTranslation();
  const inputId = useId();
  const [searchPhrase, setSearchPhrase] = useState<string | undefined>(searchName);

  const onChangeSearchPhrase = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setSearchPhrase(name);
    onChangeSearch(name);
  };

  return (
    <div className="flex w-full flex-col">
      <label htmlFor={inputId}>{t('translation:superheroes.search.title')}</label>
      <Input
        id={inputId}
        type="search"
        value={searchPhrase}
        onChange={onChangeSearchPhrase}
        placeholder={t('translation:superheroes.search.placeholder') ?? undefined}
      />
    </div>
  );
};
