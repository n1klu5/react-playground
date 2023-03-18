import { Superhero } from 'src/api/contracts/superhero';

export const createSuperhero = (overrides: Partial<Superhero> = {}): Superhero => {
  return {
    id: 729,
    name: 'Yoda',
    slug: '729-yoda',
    powerstats: {
      intelligence: 88,
      strength: 52,
      speed: 33,
      durability: 25,
      power: 100,
      combat: 90,
    },
    appearance: {
      gender: 'Male',
      race: "Yoda's species",
      height: ["2'2", '66 cm'],
      weight: ['38 lb', '17 kg'],
      eyeColor: 'Brown',
      hairColor: 'White',
    },
    biography: {
      fullName: 'Yoda',
      alterEgos: 'No alter egos found.',
      aliases: ['-'],
      placeOfBirth: '-',
      firstAppearance: 'Star Wars: Episode V - The Empire Strikes Back (1980)',
      publisher: 'George Lucas',
      alignment: 'good',
    },
    work: {
      occupation: '-',
      base: '-',
    },
    connections: {
      groupAffiliation: 'Jedi Order, Jedi High Counsl, Galactic Republic',
      relatives:
        "Master: N'Kata Del Gormo, Apprentices: Dooku, Cin Drallig, Ikrit, Rahm Kota, Ki-Adi-Mundi, Oppo Rancisis, Luke Skywalker",
    },
    images: {
      xs: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/729-yoda.jpg',
      sm: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/729-yoda.jpg',
      md: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/729-yoda.jpg',
      lg: 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/729-yoda.jpg',
    },
    ...overrides,
  };
};
