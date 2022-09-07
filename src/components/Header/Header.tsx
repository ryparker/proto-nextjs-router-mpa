import React from 'react';
import styled from 'styled-components';
import Logo from '@components/Logo';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import NavList from '@components/NavList';
import { QUERIES } from '@constants';

export type HeaderProps = {
  position?: string;
  searchPlaceholder?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Header = (props: HeaderProps) => {
  const { position, searchPlaceholder, children, ...delegated } = props;

  return (
    <Wrapper {...delegated}>
      <InnerWrapper>
        <Logo className="logo" />
        <NavList className="nav" />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  /* Overlap page content */
  z-index: 4;
  isolation: isolate;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  width: 100%;
  box-shadow: var(--shadow-elevation-low);
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  width: 100%;
  padding-top: ${8 / 16}rem;
  padding-bottom: ${8 / 16}rem;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: grid;
  gap: ${16 / 16}rem ${32 / 16}rem;
  align-items: baseline;
  justify-items: center;
  grid-template-areas:
    'logo'
    'actions'
    'nav';
  .logo {
    grid-area: logo;
    justify-self: center;
  }
  .nav {
    grid-area: nav;
    justify-self: center;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    max-width: 100%;
  }
  .actions {
    grid-area: actions;
    justify-self: center;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas: 'logo nav actions';
    grid-template-columns: min-content auto min-content;
    .logo {
      justify-self: flex-start;
    }
    .nav {
      justify-self: flex-start;
    }
    .actions {
      justify-self: flex-end;
    }
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${32 / 16}rem;
  justify-content: flex-end;
  min-height: 30px;

  @media ${QUERIES.laptopAndUp} {
    max-height: unset;
  }
`;

Header.displayName = 'Header';
export default Header;
