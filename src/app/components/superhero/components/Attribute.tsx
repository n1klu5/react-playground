import { useTranslation } from 'react-i18next';

export const Attribute = ({
  translationId,
  value,
  arrayValueLinker,
}: {
  translationId: string;
  value: string;
  arrayValueLinker?: string;
}) => {
  const { t } = useTranslation();
  const translationKey = `translation:superhero.${translationId}`;

  return (
    <div className="flex w-full flex-wrap items-baseline gap-2">
      <i>{t(translationKey)}:</i>
      <p className="text-lg">{Array.isArray(value) ? value.join(arrayValueLinker ?? ' ') : value ?? ' - '}</p>
    </div>
  );
};
