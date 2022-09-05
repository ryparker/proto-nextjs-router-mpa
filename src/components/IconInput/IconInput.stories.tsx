import IconInput from './IconInput';

export default {
  component: IconInput,
  title: 'Draft 1/IconInput',
};

export const Default = (args: any) => <IconInput {...args} />;
Default.args = {
  id: 'trash',
  alt: 'delete user confirmation field',
  type: 'text',
  placeholder: 'delete my user',
  pattern: 'delete my user',
  value: '',
  iconProps: {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
  },
};
