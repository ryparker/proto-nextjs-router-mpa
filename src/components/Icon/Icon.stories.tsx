import Icon from './Icon';

export default {
  component: Icon,
  title: 'Draft 1/Icon',
};

export const Search = (args: any) => <Icon {...args} />;
Search.args = {
  id: 'search',
};
