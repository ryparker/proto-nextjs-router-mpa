import VisuallyHidden from './VisuallyHidden';

export default {
  component: VisuallyHidden,
  title: 'Draft 1/VisuallyHidden',
};

export const Default = (args: any) => (
  <div>
    <h3>Press Alt/Opt key to see text that is only used by screen readers</h3>
    <VisuallyHidden {...args}>
      This hidden text will be read to users.
    </VisuallyHidden>
  </div>
);
