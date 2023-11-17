import { useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { Header } from './components/Header';
import { RateList } from './components/fxRates/RateList';
import { processCNBData } from './utils/processCNBData';
import { Converter } from './components/Converter';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  font-size: 1.3rem;
  color: rgb(255, 255, 255);
  margin: 20px 0;
`;

function App() {
  const { data, isPending } = useQuery({
    queryKey: ['fxRates'],
    queryFn: async () => {
      const response = await fetch(`${process.env.REACT_APP_PROXY_SERVER_URL || 'http://localhost:9000'}/api`);
      if (!response.ok) {
        throw new Error('Network response error');
      }
      return response.text();
    },
  });

  const processedData = useMemo(() => (data ? processCNBData(data) : null), [data]);

  return (
    <>
      <Header />
      <MainWrapper>
        {!isPending && processedData ? <RateList fxData={processedData} /> : null}
        {processedData && <Converter rates={processedData.rates} />}
        <Footer>Alex Alexeev 2023</Footer>
      </MainWrapper>
    </>
  );
}

export default App;
