import styled from 'styled-components';
import AppLayout from '@components/AppLayout';
import CommonPageLayout from '@components/CommonPageLayout';
import Metadata from '@components/Metadata';

import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const path = '/404';

const Custom404: NextPageWithLayout<any> = () => {
  return (
    <Wrapper>
      <Metadata title="404 Page not found" path={path} noTrack />
      <Main>
        <Content>
          <Title>404 · Page not found</Title>
          <Text>
            You requested a page that doesn&apos;t exist. Make sure the URL is
            correct or try using the search button above.
          </Text>
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

Custom404.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout pageProps={page.props}>
      <CommonPageLayout>{page}</CommonPageLayout>
    </AppLayout>
  );
};

export default Custom404;
