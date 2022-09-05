import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

export type LinkProps = {
  href: string;
  label?: string;
  disableFocus?: boolean;
  /**
   * Prefetch the page in the background. Defaults to true. Any <Link /> that is
   * in the viewport (initially or through scroll) will be preloaded. Prefetch can
   * be disabled by passing prefetch={false}. When prefetch is set to false,
   * prefetching will still occur on hover. Pages using Static Generation will
   * preload JSON files with the data for faster page transitions. Prefetching is
   * only enabled in production.
   *
   * @default true
   */
  prefetch?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * A link for internal navigation.
 *
 * @see [next/link docs](https://nextjs.org/docs/api-reference/next/link)
 */
const Link = React.forwardRef(
  (props: LinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    const { href, label, prefetch, children, disableFocus, ...delegated } =
      props;
    const tabIndex = disableFocus ? -1 : undefined;
    return (
      <StyledNextLink href={href} prefetch={prefetch} passHref>
        <StyledLink ref={ref} tabIndex={tabIndex} {...delegated}>
          {children}
        </StyledLink>
      </StyledNextLink>
    );
  }
);

const StyledNextLink = styled(NextLink)`
  color: inherit;
  width: fit-content;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  color: inherit;
`;

Link.displayName = 'Link';
export default Link;
