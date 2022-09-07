import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { QUERIES } from '@constants';

export type CommonPageLayoutProps = {
  children: React.ReactNode;
  footerColor?: string;
};

const CommonPageLayout = (props: CommonPageLayoutProps) => {
  return (
    <Wrapper
      style={
        {
          '--footer-color': props.footerColor || 'var(--color-background)',
        } as CSSProperties
      }
    >
      <StickyHeader />
      {props.children}
      <StyledFooter className="full-bleed" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  height: fit-content;
  width: 100%;
  /* Hard limit for mobile */
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  --header-height: ${129 / 16}rem;
  --filter-height: ${42 / 16}rem;
  @media ${QUERIES.laptopAndUp} {
    --header-height: ${48 / 16}rem;
  }
`;
const StickyHeader = styled(Header)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-background);
  box-shadow: var(--shadow-elevation-low);
`;
const StyledFooter = styled(Footer)`
  margin-top: auto;
  background-color: var(--footer-color);
  width: 100%;
`;

export default CommonPageLayout;
