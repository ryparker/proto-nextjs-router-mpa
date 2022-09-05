import SearchInput from './SearchInput';

export default {
  component: SearchInput,
  title: 'Draft 1/SearchInput',
};

export const Default = (args: any) => <SearchInput {...args} />;
Default.args = {
  label: 'Search',
};
