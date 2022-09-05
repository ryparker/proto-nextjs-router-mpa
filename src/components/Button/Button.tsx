import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { children, onClick, ...delegated } = props;
  return (
    <Wrapper {...delegated}>
      <Shadow></Shadow>
      <Edge></Edge>
      <Front>{children}</Front>
    </Wrapper>
  );
};

const Front = styled.span`
  position: relative;
  display: block;
  padding: ${4 / 16}rem ${12 / 16}rem;
  border-radius: 4px;
  background: var(--color-button);
  color: var(--color-button-text);
  font-size: ${24 / 16}rem;
  line-height: 1;
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  transform: translateY(-4px);
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  /* Render with GPU to avoid weird overflow */
  will-change: transform;

  background: linear-gradient(
    to left,
    hsl(206, 96%, 16%) 0%,
    hsl(206, 96%, 32%) 8%,
    hsl(206, 96%, 32%) 92%,
    hsl(206, 96%, 16%) 100%
  );
`;

const Wrapper = styled.button`
  position: relative;
  background: transparent;
  border: none;
  outline-offset: 4px;
  padding: 0;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }

  &:hover > ${Shadow} {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active > ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:hover > ${Front} {
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
    transform: translateY(-6px);
  }

  &:active > ${Front} {
    transition: transform 34ms;
    transform: translateY(-2px);
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export default Button;
