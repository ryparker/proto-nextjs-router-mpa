import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';

export default function Custom404() {
  const subText =
    "You requested a page that doesn't exist. You might have better luck using the search bar above.";
  return (
    <Wrapper>
      <Header path="/404" searchPlaceholder="for the people act…" />
      <Main>
        <Content>
          <Title>404 · Page not found</Title>
          <Text>{subText}</Text>
        </Content>
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;
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
