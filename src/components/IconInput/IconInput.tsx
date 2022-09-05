import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';
import Icon, { IconProps } from '@components/Icon';
import VisuallyHidden from '@components/VisuallyHidden';

export type IconInputProps = {
  /**
   * Icon ID
   */
  id: IconProps['id'];
  /**
   * Screen reader text
   */
  alt: string;
  /**
   * Placeholder text for the input when it is empty.
   */
  placeholder: string;
  /**
   * Any props you'd like to forward to the Icon component.
   */
  iconProps?: Omit<IconProps, 'id'>;
  /**
   * Handler for when the input value changes.
   */
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Whether the input is required.
   */
  required?: boolean;
  /**
   * The current input value. This turns the input into a controlled component.
   */
  value?: string;
  fullWidth?: boolean;
} & InputHTMLAttributes<HTMLLabelElement>;

const IconInput = forwardRef(function IconInput(
  props: IconInputProps,
  ref: any
) {
  const {
    id,
    iconProps,
    alt,
    required,
    placeholder,
    handleChange,
    value,
    fullWidth,
    style,
    type,
    maxLength,
    minLength,
    ...delegated
  } = props;

  return (
    <Label
      ref={ref}
      style={
        {
          ...style,
          '--color': Boolean(value)
            ? 'var(--color-gray100)'
            : 'var(--color-gray500)',
          '--width': fullWidth ? '100%' : 'auto',
        } as CSSProperties
      }
      {...delegated}
    >
      <VisuallyHidden>{alt}</VisuallyHidden>
      <Input
        placeholder={placeholder}
        spellCheck="false"
        onChange={handleChange}
        alt={alt}
        required={required}
        value={value}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
      />
      <StyledIcon
        size={`${18 / 16}rem`}
        strokeWidth={2}
        {...iconProps}
        id={id}
      />
    </Label>
  );
});

const Input = styled.input`
  --border-size: 1px;
  width: 100%;
  /* margin-bottom: -6px; */
  outline-offset: 4px;
  border: none;
  border-bottom: var(--border-size) solid var(--color-gray300);
  border-radius: 0;
  background: transparent;
  padding-left: ${28 / 16}rem;
  padding-right: 0;
  font-size: ${18 / 16}rem;
  color: inherit;
  line-height: 1.4;
  &::placeholder {
    color: var(--color-gray500);
    font-style: italic;
  }
  &:focus {
    /* We fade out the background when this field is focused, the outline should be unnecessary.
    Also it overflows to the point where it looks bad. */
    outline: none;
  }
`;
const Label = styled.label`
  position: relative;
  display: block;
  font-family: century_supra_t3;
  color: var(--color);
  width: var(--width);

  ${Input}:focus-visible {
    outline: solid 1px var(--color-flag-red);
    outline-offset: 2px;
  }
  @media (pointer: fine) {
    ${Input}:focus-visible {
      outline: none;
    }
  }
  ${Input}:active {
    outline: none;
  }
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  will-change: color;
  transition: color 0.2s ease-in-out;
`;

export default IconInput;
