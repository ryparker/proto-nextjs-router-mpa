import useLocation from '@hooks/useLocation';
import React, { useEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';

export type QueryViewProps = {};

const QueryView = (props: QueryViewProps) => {
  const { ...delegated } = props;
  console.log(props);
  const location = useLocation();
  const [query, setQuery] = React.useState<string | undefined>('N/a');

  useEffect(() => {
    setQuery(location.search);
  }, [location.search]);

  return (
    <Wrapper {...delegated}>
      <h4>Query</h4>
      <p>{query}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default QueryView;
