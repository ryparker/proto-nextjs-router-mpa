import React from 'react';
import { useRouter } from 'next/router';
import styled, { CSSProperties } from 'styled-components';
import Link from '@components/Link';

export type NavListProps = {} & React.HTMLAttributes<HTMLElement>;

const NavList = (props: NavListProps) => {
  const { ...delegated } = props;
  const router = useRouter();
  const path = router.pathname;
  const isOnHome = path === '/';
  const isOnElectedOfficials = path.startsWith('/elected-officials');
  return (
    <Wrapper {...delegated}>
      <NavItem>
        <Link
          href="/"
          style={
            {
              '--font-weight': isOnHome ? '600' : '400',
            } as CSSProperties
          }
        >
          Home
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
