import NavList from './NavList';

export default {
  component: NavList,
  title: 'Draft 1/NavList',
};

export const Default = (args: any) => <NavList {...args} />;
Default.args = {
  className: 'nav',
  path: '/elected-officials',
};
