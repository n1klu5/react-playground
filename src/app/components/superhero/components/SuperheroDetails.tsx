import { Superhero } from 'src/api/contracts/superhero';
import { DetailsSection } from './DetailsSection';
import { Image } from './Image';

export const SuperheroDetails = ({ superhero }: { superhero: Superhero }) => (
  <div className="flex flex-col rounded border border-pink-700 md:flex-row">
    <div className="order-2 flex w-full flex-col md:order-1 md:w-1/2">
      <DetailsSection titleKey="translation:superhero.powerstats" details={superhero.powerstats} />
      <DetailsSection titleKey="translation:superhero.biography" details={superhero.biography} arrayValueLinker=", " />
      <DetailsSection
        titleKey="translation:superhero.appearance"
        details={superhero.appearance}
        arrayValueLinker="/ "
      />
      <DetailsSection titleKey="translation:superhero.work" details={superhero.work} />
      <DetailsSection titleKey="translation:superhero.connections" details={superhero.connections} />
    </div>
    <div className="order-1 flex h-fit w-full justify-center md:order-2 md:w-1/2 md:justify-end">
      <Image images={superhero.images} />
    </div>
  </div>
);
