import { default as NextImage } from 'next/image';
import { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {}
const Image = (props: ImageProps) => {
  const { ...delegated } = props;

  return <NextImage {...delegated} />;
};

export default Image;
