import { Header, Loader, Converter, RateList, FooterWrapper, MainWrapper, LoaderWrapper, Wrapper } from './components';
import { useRateContext } from './contexts';

function App() {
  const { isDataPending: isPending, dataFetchingError: error, data } = useRateContext();

  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        {isPending && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {/* TODO: nice to have: create pretty error component */}
        {!!error && <div>{error.message}</div>}
        {!!data && (
          <>
            <Converter rates={data.rates} />
            <RateList fxData={data} />
          </>
        )}
      </MainWrapper>
      <FooterWrapper>
        made with &hearts; by <b>Alex Alexeev</b> 2023
      </FooterWrapper>
    </Wrapper>
  );
}

export default App;
