import type { NextPage } from 'next';
import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Metadata from '@components/Metadata';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Metadata title={'Home'} description500={''} path={'/'} keywords={['']} />
      <MaxWidthWrapper>
        <Header path="/" />
        <Main>
          <h1>Make it happen</h1>
        </Main>
      </MaxWidthWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${10 / 16}rem;
`;

export default Home;
