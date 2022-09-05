import Button from './Button';

export default {
  component: Button,
  title: 'Draft 1/Button',
};

export const Default = (args: any) => <Button {...args} />;
Default.args = {
  children: 'Click me',
};
