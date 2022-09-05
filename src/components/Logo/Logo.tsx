import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = (props: {}) => {
  return (
    <Link href="/" passHref {...props}>
      <LogoLink>
        <SiteTitle>Logo</SiteTitle>
      </LogoLink>
    </Link>
  );
};

const LogoLink = styled.a`
  text-decoration: none;
`;

const SiteTitle = styled.h1`
  font-size: 2.5rem;
  display: inline-block;
  margin: 0;
`;

export default Logo;
