import React from 'react';
import styled from 'styled-components';
import Logo from '@components/Logo';
import { QUERIES } from '@constants';
import NavList from '@components/NavList';
import MaxWidthWrapper from '@components/MaxWidthWrapper';

export type HeaderProps = {
  path: string;
  position?: string;
  searchPlaceholder?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Header = (props: HeaderProps) => {
  const { path, position, searchPlaceholder, ...delegated } = props;
  return (
    <Wrapper {...delegated}>
      <InnerWrapper>
        <Logo />
        <NavMenu>
          <NavItem>
            <NavList path={path} />
          </NavItem>
        </NavMenu>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 2;
  isolation: isolate;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  position: relative;
  padding-top: ${20 / 16}rem;
  padding-bottom: ${20 / 16}rem;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${16 / 16}rem;

  .stretch {
    flex-grow: 1;
  }

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const NavMenu = styled.ul`
  --padding: ${16 / 16}rem;
  margin: 0;
  margin-top: 14px;
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  gap: var(--padding);
  height: fit-content;
  overflow-x: auto;
  max-width: 100%;

  @media ${QUERIES.tabletAndUp} {
    overflow: visible;
  }
`;

const NavItem = styled.li`
  color: var(--color-headline);
  /* SlabButton will look like crap if nav items wrap */
  /* TODO: find a better solution to support mobile */
  white-space: nowrap;

  :not(:first-child) {
    border-left: 1px solid var(--color-paragraph);
    padding-left: var(--padding);
  }

  & > a {
    color: var(--color-headline);

    text-decoration: none;
    font-weight: 600;
  }

  font-size: ${20 / 16}rem;
`;

export default Header;
