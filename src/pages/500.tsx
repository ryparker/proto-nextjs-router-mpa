import styled from 'styled-components';
import Button from '@components/Button';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Link from '@components/Link';

export default function Custom500() {
  const subText =
    "Sorry about that. If you have don't mind, please report what happened and I'll fix it.";
  return (
    <Wrapper>
      <Header path="/500" searchPlaceholder="for the people act…" />
      <Main>
        <Content>
          <Title>500 · Server Error</Title>
          <Text>{subText}</Text>
          <Button
            as={Link}
            href="https://github.com/CongressWiki/Roadmap/issues/new"
            rel="noopener noreferrer"
            aria-label="Report an issue"
          >
            Report
          </Button>
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
