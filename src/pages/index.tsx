import styled from 'styled-components';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Metadata from '@components/Metadata';
import AppLayout from '@components/AppLayout';
import CommonPageLayout from '@components/CommonPageLayout';
import { ReactElement } from 'react';
import Toggle from '@components/Toggle';
import QueryView from '@components/QueryView';

export type HomePageProps = {};

function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Main>
          <h1>Make it happen</h1>
          <Toggle />
          <QueryView />
        </Main>
      </MaxWidthWrapper>
    </>
  );
}

const Main = styled.main`
  padding-top: ${32 / 16}rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${10 / 16}rem;
`;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {/* <Metadata title="Home" path="/" keywords={['Home']} /> */}
      {/* <AppLayout pageProps={page.props}> */}
      <CommonPageLayout>{page}</CommonPageLayout>
      {/* </AppLayout> */}
    </>
  );
};

export default Home;
