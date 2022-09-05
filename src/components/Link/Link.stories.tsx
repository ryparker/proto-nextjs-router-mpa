import Link from './Link';

export default {
  component: Link,
  title: 'Draft 1/Link',
};

export const Default = (args: any) => (
  <Link {...args}>
    <p>Home</p>
  </Link>
);

Default.args = {
  href: '/',
};
