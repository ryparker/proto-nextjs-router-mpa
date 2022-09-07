import React from 'react';
import styled from 'styled-components';
import IconButton from '@components/IconButton';
import Link from '@components/Link';

export type FooterProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Footer = (props: FooterProps) => {
  const { ...delegated } = props;
  const iconSize = `${24 / 16}rem`;
  return (
    <Wrapper {...delegated}>
      <FirstLine>
        <StyledLink href="/about">About this site</StyledLink>
        <Separator>|</Separator>
        <IconButton
          label={'Go to GitHub Organization'}
          as={Link}
          href="https://github.com/CongressWiki?type=source"
          aria-label="Github Organization"
          tip="Github Organization"
          hoverFill="var(--color-highlight)"
          id="github"
          color={'var(--color-card-text)'}
          iconProps={{
            size: iconSize,
          }}
        />
        <IconButton
          label={'Go to Twitter profile'}
          as={Link}
          href="https://twitter.com/WikiCongress"
          aria-label="Twitter Profile"
          tip="Twitter Profile"
          hoverFill="var(--color-highlight)"
          id="twitter"
          color={'var(--color-card-text'}
          iconProps={{
            size: iconSize,
          }}
        />
      </FirstLine>
      <Copyright>&#169; 2022 all rights are reserved</Copyright>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  min-height: 305px;
  width: 100%;
  max-width: 1800px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding-bottom: ${32 / 16}rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const FirstLine = styled.div`
  display: flex;
  align-items: center;
  gap: ${29 / 16}rem;
`;
const Separator = styled.span`
  display: block;
`;
const Copyright = styled.p`
  text-align: center;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  color: inherit !important;
  white-space: nowrap;
  text-decoration: none;
  /* padding-right: ${16 / 16}rem; */
  &:hover {
    cursor: pointer;
    margin-bottom: -1px;
    border-bottom: 1px solid var(--color-card-headline);
    color: var(--color-card-headline);
  }
`;

export default Footer;
