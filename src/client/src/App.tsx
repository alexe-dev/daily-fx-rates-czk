import { Header, Loader, Converter, RateList, FooterWrapper, MainWrapper, LoaderWrapper, Wrapper } from './components';
import { useCNBData, useConverter } from './hooks';
import { useContext } from 'react';

function App() {
  const { data, isPending, error } = useCNBData();

  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        {isPending && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {/* TODO: create error component */}
        {!!error && <div>{error.message}</div>}
        {!!data && (
          <>
            <Converter rates={data.rates} />
            <RateList fxData={data} />
          </>
        )}
      </MainWrapper>
      <FooterWrapper>
        made with passion by <b>Alex Alexeev</b> in 2023
      </FooterWrapper>
    </Wrapper>
  );
}

export default App;
