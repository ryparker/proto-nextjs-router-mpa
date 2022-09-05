import Image from './Image';

export default {
  component: Image,
  title: 'Draft 1/Image',
};

export const ImageTemplate = (args: any) => <Image {...args} />;
ImageTemplate.args = {
  src: 'https://democracy-images.s3.amazonaws.com/congress/cropped/B000444.png',
  alt: 'Portrait of Joe Biden',
  layout: 'fill',
  quality: 50,
};
