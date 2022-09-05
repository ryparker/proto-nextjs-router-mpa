import React from 'react';
import styled from 'styled-components';

export type SpinnerProps = {};

const Spinner = (props: SpinnerProps) => {
  const { ...delegated } = props;
  return <Wrapper {...delegated}></Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  text-indent: -9999em;
  border: 3px solid hsl(348 84% 60% / 0.3);
  border-left: 3px solid var(--color-tertiary);
  border-radius: 50%;
  animation: spin 500ms infinite linear;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
