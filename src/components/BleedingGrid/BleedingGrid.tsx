import { QUERIES } from '@constants';
import React from 'react';
import styled from 'styled-components';

export type BleedingGridProps = {} & React.HTMLAttributes<HTMLDivElement>;

const BleedingGrid = (props: BleedingGridProps) => {
  const { children, ...delegated } = props;
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  --padding: ${16 / 16}rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${16 / 16}rem ${32 / 16}rem;
  padding-top: ${16 / 16}rem;
  max-width: 100%;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr min(100%, 1200px) 1fr;
    gap: 0 ${32 / 16}rem;

    > * {
      padding-left: 0;
      padding-right: 0;
      grid-column: 2;
    }

    .left-side {
      grid-column: 1 / 2;
    }

    .right-side {
      grid-column: 3 / 4;
    }

    .full-bleed {
      grid-column: 1 / -1;
    }
  }
`;

export default BleedingGrid;
