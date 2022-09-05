import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon from '@components/Icon';
import VisuallyHidden from '@components/VisuallyHidden';
import { QUERIES } from '@constants';

export type SearchInputProps = {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLLabelElement>;

const SearchInput = (props: SearchInputProps) => {
  const { placeholder, handleChange, ...delegated } = props;

  return (
    <Label {...delegated}>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input
        placeholder={placeholder ?? 'Search…'}
        type="text"
        spellCheck="false"
        onChange={handleChange}
      />
      <SearchIcon id="search" size={16} />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const Input = styled.input`
  height: fit-content;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-gray100);
  outline-offset: 4px;
  padding-left: ${32 / 16}rem;
  font-size: ${32 / 16}rem;
  color: var(--color-headline);
  width: fit-content;

  &::placeholder {
    color: var(--color-gray500);
  }

  /* TODO: look into showing the outline only when focused by keyboard users */
  @media (pointer: fine) {
    &:focus {
      outline: none;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    font-size: ${40 / 16}rem;
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: ${16 / 16}rem;
  margin: auto;
  width: 24px;
  height: 24px;
  color: var(--color-gray100);
`;

export default SearchInput;
