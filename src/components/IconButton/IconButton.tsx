import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Icon, { IconProps } from '@components/Icon';
// import Tooltip from '@components/Tooltip';
import VisuallyHidden from '@components/VisuallyHidden';

import type { TooltipProps } from '@components/Tooltip';

export type IconButtonProps = {
  /**
   * Id of the icon to use.
   */
  id: IconProps['id'];
  /**
   * Tooltip text
   */
  tip: string;
  /**
   * label read by screen readers
   */
  label: string;
  /**
   * Size of the button. Apple recommends buttons are at least 44px for touch screen usage.
   * @default 44/16 rem (44px)
   */
  size?: string;
  /**
   * Style the button's border.
   */
  border?: boolean;
  /**
   * The color of the SVG fill when hovered.
   *
   * @default var(--color-gray800)
   */
  hoverFill?: string;
  /**
   * The color of the background when hovered.
   *
   * @default var(--color-gray800)
   */
  hoverBackground?: string;
  /**
   * The color of the background when clicked.
   *
   * @default var(--color-gray900)
   */
  activeBackground?: string;
  /**
   * Shorthand prop for the icon's size. If size is provided in iconProps this will be overridden.
   */
  iconSize?: string;
  /**
   * Forwarded props for the Icon component
   */
  iconProps?: Omit<IconProps, 'id'>;
  /**
   * Forwarded props for the tooltip content
   */
  tooltipContent?: TooltipProps['tooltipContent'];
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton = React.forwardRef(
  (props: IconButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const {
      id,
      tip,
      label,
      tooltipContent,
      size = `${44 / 16}rem`,
      border,
      hoverFill,
      hoverBackground,
      activeBackground,
      iconSize,
      iconProps,
      ...delegated
    } = props;
    return (
      // <Tooltip tip={tip} tooltipContent={tooltipContent}>
      <Button
        ref={ref}
        aria-label={label}
        style={
          {
            '--button-size': size,
            '--icon-size': iconSize || iconProps?.size,
            '--hover-fill': hoverFill || 'initial',
            '--border': border ? '1px solid var(--color-gray500)' : 'none',
            '--hover-background': hoverBackground || 'var(--color-gray800)',
            '--active-background': activeBackground || 'var(--color-gray900)',
          } as CSSProperties
        }
        {...delegated}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <StyledIcon id={id} size={iconSize} {...iconProps} />
      </Button>
      // {/* </Tooltip> */}
    );
  }
);

const Button = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  /* Remove button flash on mobile */
  -webkit-tap-highlight-color: transparent;
  /* Disable text highlight when long pressing on mobile */
  user-select: none;
  isolation: isolate;

  &:focus-visible {
    outline-offset: -2px;
  }
`;
const StyledIcon = styled(Icon)`
  --button-diff: calc(var(--button-size) - var(--icon-size));
  --button-diff-half: calc(var(--button-diff) / 2);
  --button-diff-half-neg: calc(var(--button-diff-half) * -1);
  --transition-duration-in: 300ms;
  --transition-duration-out: 500ms;
  --transition-style: ease-out;
  position: relative;
  z-index: 2;

  &:focus {
    border-radius: 999px;
  }

  &:before {
    z-index: -1;
    position: absolute;
    top: var(--button-diff-half-neg);
    left: var(--button-diff-half-neg);
    display: block;
    content: '';
    height: var(--button-size);
    width: var(--button-size);
    border-radius: 999px;
    background-color: transparent;
  }

  @media (hover: hover) and (pointer: fine) {
    will-change: color;
    transition-property: color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-style);
    & > svg {
      will-change: fill;
      transition-property: fill;
      transition-duration: var(--transition-duration-out);
      transition-timing-function: var(--transition-style);
    }
    &:before {
      will-change: background-color, transform;
      transition-property: background-color, transform;
      transition-duration: var(--transition-duration-out);
      transition-timing-function: var(--transition-style);
    }

    ${Button}:hover & > svg {
      transition-duration: var(--transition-duration-in);
      fill: var(--hover-fill);
    }
    ${Button}:hover &:before {
      transition-duration: var(--transition-duration-in);
      background-color: var(--hover-background);
      transform: none;
    }
    ${Button}:active &:before {
      transition-duration: var(--transition-duration-in);
      background-color: var(--active-background);
      transform: scale(0.8);
    }
  }
`;

IconButton.displayName = 'IconButton';
export default IconButton;
