import Header from './Header';

export default {
  component: Header,
  title: 'Draft 1/Header',
};

export const Default = (args: any) => <Header {...args} />;
Default.args = {
  path: '/',
};
