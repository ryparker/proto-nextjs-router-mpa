import styled from 'styled-components';
import { QUERIES } from '@constants';

export type MaxWidthWrapperProps = {
  verticalScrollBarWidth?: string;
};

const MaxWidthWrapper = styled.div<MaxWidthWrapperProps>`
  --padding: ${16 / 16}rem;
  --horizontal-padding: calc(var(--padding) * 2);
  /* position: relative; */
  width: 100%;
  max-width: min(100%, calc(1200px + var(--horizontal-padding)));
  margin: 0 auto;
  padding-left: var(--padding);
  padding-right: calc(
    var(--padding) - ${(props) => props.verticalScrollBarWidth || '0px'}
  );

  @media ${QUERIES.laptopAndUp} {
    --padding: ${32 / 16}rem;
  }
`;

export default MaxWidthWrapper;
