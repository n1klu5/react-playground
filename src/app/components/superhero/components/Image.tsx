import { Images } from 'src/api/contracts/superhero';

interface Props {
  images: Images;
}
export const Image = ({ images }: Props) => {
  return (
    <>
      <img className="sm:hidden" src={images.sm} alt={`${name}-image`} width="100" height="100" />
      <img className="hidden md:block lg:hidden" src={images.md} alt={`${name}-image`} width="200" height="200" />
      <img className="hidden lg:block" src={images.lg} alt={`${name}-image`} width="400" height="400" />
    </>
  );
};
