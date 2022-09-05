import UnderliningLink from './UnderliningLink';

export default {
  component: UnderliningLink,
  title: 'Draft 1/UnderliningLink',
};

export const Default = (args: any) => (
  <UnderliningLink {...args}>
    <span>Hover me</span>
  </UnderliningLink>
);
Default.args = {
  href: '/elected-official/P000614',
  label: "Chris Pappas's profile",
  prefetch: false,
};
