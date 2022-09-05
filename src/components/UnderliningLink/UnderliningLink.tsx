import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Link from '@components/Link';

import type { LinkProps } from '@components/Link';

export type UnderliningLinkProps = {
  children: React.ReactNode;
  as?: any;
  label?: string;
  disableFocus?: boolean;
} & LinkProps;

const UnderliningLink = React.forwardRef(
  (props: UnderliningLinkProps, ref: React.ForwardedRef<LinkProps>) => {
    const { children, as, disableFocus, ...delegated } = props;
    const tabIndex = disableFocus ? -1 : undefined;
    return (
      <StyledLink ref={ref} tabIndex={tabIndex} as={as} {...delegated}>
        {children}
      </StyledLink>
    );
  }
);

const StyledLink = styled(Link)`
  width: fit-content;
  display: inline;
  color: var(--color-headline);

  &:hover {
    text-decoration: underline var(--color-flag-red);
    text-underline-offset: ${4 / 16}rem;
    text-decoration-thickness: 1px;
  }
  &:focus {
    outline-color: var(--color-flag-red);
    outline-offset: 2px;
  }
`;

UnderliningLink.displayName = 'UnderliningLink';
export default UnderliningLink;
