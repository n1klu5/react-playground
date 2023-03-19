import { useTranslation } from 'react-i18next';
import { Attribute } from './Attribute';

export const DetailsSection = <T extends object>({
  titleKey,
  details,
  arrayValueLinker,
}: {
  titleKey: string;
  details: T;
  arrayValueLinker?: string;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col">
      <div className="font-bold text-pink-700">{t(titleKey)}:</div>
      <div className="flex w-full flex-col md:ml-10">
        {Object.entries(details).map(([key, value]) => (
          <Attribute key={key} translationId={key} value={value} arrayValueLinker={arrayValueLinker} />
        ))}
      </div>
    </div>
  );
};
