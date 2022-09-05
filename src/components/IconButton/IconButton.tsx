import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Tooltip from '@components/Tooltip';
import VisuallyHidden from '@components/VisuallyHidden';
import Icon, { IconProps } from '@components/Icon';

import type { TooltipProps } from '@components/Tooltip';
export type IconButtonProps = {
  /**
   * Icon ID
   */
  id: IconProps['id'];
  tip: string;
  label: string;
  iconProps?: Omit<IconProps, 'id'>;
  as?: any;
  href?: string;
  /**
   * @default 44px
   */
  size?: string;
  offsetLeft?: string;
  offsetRight?: string;
  offsetTop?: string;
  offsetBottom?: string;
  tooltipContent?: TooltipProps['tooltipContent'];
  hoverFill?: string;
  border?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton = React.forwardRef(
  (props: IconButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      children,
      tip,
      as,
      href,
      label,
      tooltipContent,
      size = `${44 / 16}rem`,
      offsetLeft,
      offsetRight,
      hoverFill,
      offsetTop,
      offsetBottom,
      onClick,
      border,
      id,
      iconProps,
      ...delegated
    } = props;
    return (
      <Tooltip tip={tip} tooltipContent={tooltipContent}>
        <Wrapper
          ref={ref}
          as={as}
          href={href}
          onClick={onClick}
          label={label}
          style={
            {
              '--button-wrapper-size': size,
              '--margin-left': offsetLeft ? offsetLeft : '0',
              '--margin-right': offsetRight ? offsetRight : '0',
              '--margin-top': offsetTop ? offsetTop : '0',
              '--margin-bottom': offsetBottom ? offsetBottom : '0',
              '--hover-fill': hoverFill || 'revert',
              '--border': border ? '1px solid var(--color-gray500)' : 'none',
            } as CSSProperties
          }
          {...delegated}
        >
          <VisuallyHidden>{label}</VisuallyHidden>
          <Icon id={id} {...iconProps} />
        </Wrapper>
      </Tooltip>
    );
  }
);

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 9999px;
  border: var(--border);
  display: grid;
  place-content: center;
  width: var(--button-wrapper-size);
  height: var(--button-wrapper-size);

  /* Offset the padding */
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-bottom: var(--margin-bottom);
  margin-top: var(--margin-top);

  will-change: background-color transform;
  transition: background-color 600ms, transform 600ms;
  /* Remove button flash on mobile */
  -webkit-tap-highlight-color: transparent;
  /* Disable text highlight when long pressing on mobile */
  user-select: none;

  & > * > svg {
    will-change: fill;
    transition: fill 500ms ease-out;
  }

  @media (hover: hover) {
    &:hover > * > svg {
      transition: fill 300ms ease-out;
      fill: var(--hover-fill);
    }
    &:hover {
      transition: background-color 300ms, transform 300ms;
      background-color: var(--color-gray800);
      transform: none;
    }
    &:active {
      transition: background-color 300ms, transform 300ms;
      transform: scale(0.8);
      background-color: var(--color-gray900);
    }
  }
  &:focus-visible {
    outline-offset: -2px;
  }
`;

IconButton.displayName = 'IconButton';
export default IconButton;
