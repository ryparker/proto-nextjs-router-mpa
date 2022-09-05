import React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '@components/VisuallyHidden';

export type UnderlinedButtonProps = {
  label: string;
  isActive?: boolean;
  as?: any;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const UnderlinedButton = (props: UnderlinedButtonProps) => {
  const { children, label, isActive, ...delegated } = props;
  return (
    <NativeButton {...delegated}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </NativeButton>
  );
};

const NativeButton = styled.button`
  transition: color 200ms ease-out, border 200ms ease-out;
  background-color: transparent;
  border: none;
  color: var(--color-gray200);
  padding: 2px;
  line-height: 1.2;
  font-family: century_supra_c3;
  border-bottom: 1px solid transparent;
  transition: border-color 400ms ease-out;
  will-change: border-color;

  &:hover {
    cursor: pointer;
    transition: color 100ms ease-out, border 100ms ease-out;
    color: var(--color-gray200);
    border-color: var(--color-flag-red);
    transition: border-color 200ms ease-out;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default UnderlinedButton;
