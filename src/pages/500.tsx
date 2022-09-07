import type { ReactElement } from 'react';

import styled from 'styled-components';
import AppLayout from '@components/AppLayout';
import Button from '@components/Button';
import CommonPageLayout from '@components/CommonPageLayout';
import Link from '@components/Link';
import Metadata from '@components/Metadata';

import type { NextPageWithLayout } from './_app';

const path = '/500';

const Custom500: NextPageWithLayout<any> = () => {
  return (
    <Wrapper>
      <Metadata title="Oops! Something went wrong." path={path} noTrack />
      <Main>
        <Content>
          <Title>500 · Server Error</Title>
          <Text>
            Sorry about that. If you don&apos;t mind, please report what
            happened and I&apos;ll fix it.
          </Text>
          <Button
            as={Link}
            href="https://github.com/CongressWiki/Roadmap/issues/new"
            rel="external noopener"
            aria-label="Report an issue on GitHub"
          >
            Report
          </Button>
        </Content>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Main = styled.main`
  display: grid;
  place-content: center;
  flex: 1;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${32 / 16}rem;
`;
const Title = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  max-width: 40ch;
  text-align: center;
  font-size: ${18 / 16}rem;
`;

Custom500.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout pageProps={page.props}>
      <CommonPageLayout>{page}</CommonPageLayout>
    </AppLayout>
  );
};

export default Custom500;
