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

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
        {!isPending && processedData ? (
          <RateList fxData={processedData} />
        ) : (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {processedData && <Converter rates={processedData.rates} />}
        {!isPending && <Footer>Alex Alexeev 2023</Footer>}
      </MainWrapper>
    </>
  );
}

export default App;
