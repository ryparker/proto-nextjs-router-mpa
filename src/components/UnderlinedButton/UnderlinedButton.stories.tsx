import styled from 'styled-components';
import UnderlinedButton from './UnderlinedButton';

export default {
  title: 'Draft 1/UnderlinedButton',
  component: UnderlinedButton,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    sponsor: {
      control: {
        type: 'object',
      },
    },
  },
};

export const Default = (args: any) => (
  <Frame>
    <UnderlinedButton {...args} />
  </Frame>
);

const Frame = styled.div`
  background-color: var(--color-card-background);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-content: center;
`;

Default.args = {
  label: 'expand summary…',
};
