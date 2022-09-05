import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Link from '@components/Link';

export type NavListProps = {
  path: string;
} & React.HTMLAttributes<HTMLElement>;

const NavList = (props: NavListProps) => {
  const { path, ...delegated } = props;
  const isOnLegislation = path === '/';
  const isOnElectedOfficials = path.startsWith('/elected-officials');
  return (
    <Wrapper {...delegated}>
      <NavItem>
        <Link
          href="/"
          style={
            {
              '--font-weight': isOnLegislation ? '600' : '400',
            } as CSSProperties
          }
        >
          Legislation
        </Link>
      </NavItem>
      <NavItem>
        <Link
          href="/elected-officials"
          style={
            {
              '--font-weight': isOnElectedOfficials ? '600' : '400',
            } as CSSProperties
          }
        >
          Elected Officials
        </Link>
      </NavItem>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  --spacing: ${32 / 16}rem;
  list-style: none;
  margin: 0;
  padding-left: 0;
  height: fit-content;
  display: flex;
  gap: var(--spacing);
`;
const NavItem = styled.li`
  white-space: nowrap;
  font-size: ${15 / 16}rem;
  & > a {
    color: var(--color-gray300);
    text-decoration: none;
    font-family: century_supra_c3;
    transition: color 600ms;
    font-weight: var(--font-weight);
  }
  & > a:hover {
    transition: color 200ms;
    color: var(--color-gray50);
  }
`;

export default NavList;
