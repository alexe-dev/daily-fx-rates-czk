import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import Flags from 'country-flag-icons/react/3x2';
import { countryCodes } from './countryCodes';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RatesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type RateData = {
  countryName: string;
  countryCode: string;
  currency: string;
  amount: string;
  currencyCode: string;
  rate: string;
};

type FXRatesData = {
  date: string;
  headers: string[];
  rates: RateData[];
};

const processCNBData = (data: string): FXRatesData => {
  const dataArray = data?.split('\n');
  const date = dataArray?.[0].split('#')[0];
  const headers = dataArray?.[1].split('|');
  const rows = dataArray?.slice(2, -1).map((row) => row.split('|'));
  // last row is removed as it is empty

  const rates = rows?.map((row) => ({
    countryName: row[0],
    countryCode: countryCodes[row[0] as keyof typeof countryCodes],
    currency: row[1],
    amount: row[2],
    currencyCode: row[3],
    rate: row[4],
  }));
  return { date, headers, rates };
};

const CountryFlag: FC<{ countryCode: string }> = ({ countryCode }) => {
  const Flag = Flags?.[countryCode as keyof typeof Flags];
  return Flag ? <Flag width={30} /> : <span>{countryCode}</span>;
};

const Rate: FC<{ rateData: RateData }> = ({ rateData }) => {
  return (
    <RateCard>
      <CountryFlag countryCode={rateData.countryCode} />
      <span>
        {rateData.amount} {rateData.currencyCode}
      </span>

      <span>{rateData.rate}</span>
    </RateCard>
  );
};

const RatesList = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  flex-wrap: wrap;
  font-weight: 500;
  margin-top: 20px;
  justify-content: center;
`;

const RateCard = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border-radius: 0.5rem;
  background-color: #1c1c1e;
  color: white;
  border: 1px solid #1c1c1e;
  justify-content: space-between;
`;

const Rates: FC<{ fxData: FXRatesData }> = ({ fxData }) => {
  return (
    <RatesWrapper>
      <h2>{fxData.date?.toUpperCase()}</h2>
      <RatesList>
        {fxData.rates?.map((rate) => (
          <Rate key={rate.countryCode} rateData={rate} />
        ))}
      </RatesList>
    </RatesWrapper>
  );
};

function App() {
  const [CZKAmount, setCZKAmount] = React.useState('1000');
  const [selectedCurrency, setSelectedCurrency] = React.useState('EUR');

  const { data, isPending } = useQuery({
    queryKey: ['fxRates'],
    queryFn: async () => {
      const response = await fetch(process.env.REACT_APP_PROXY_SERVER_URL || 'http://localhost:9000' + '/proxy');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    },
  });

  const processedData = useMemo(() => (data ? processCNBData(data) : null), [data]);

  const selectedCurrencyRate = useMemo(
    () => processedData?.rates?.find((rate) => rate.currencyCode === selectedCurrency)?.rate,
    [selectedCurrency, processedData]
  );

  return (
    <div>
      <header>
        <Title>CNB FX Daily Rates</Title>
      </header>
      <Wrapper>
        {!isPending && processedData ? <Rates fxData={processedData} /> : null}
        <ConverterSection>
          <h2>CZK currency converter</h2>
          <ConversionInner>
            <ConversionInputWrapper>
              <CZKLabel htmlFor="czk">CZK</CZKLabel>
              <CZKInput
                id="czk"
                value={CZKAmount}
                type="text"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value !== '' && !Number(value)) {
                    return;
                  }
                  setCZKAmount(e.currentTarget.value);
                }}
              />
            </ConversionInputWrapper>

            <ConversionInputWrapper>
              <CurrencySelect onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency}>
                {processedData?.rates?.map((rate) => {
                  return (
                    <option key={rate.currencyCode} value={rate.currencyCode}>
                      {rate.currencyCode}
                    </option>
                  );
                })}
              </CurrencySelect>
              <ConversionResult>
                {selectedCurrencyRate
                  ? parseFloat((Number(CZKAmount) / Number(selectedCurrencyRate)).toFixed(3))
                  : null}
              </ConversionResult>
            </ConversionInputWrapper>
          </ConversionInner>
        </ConverterSection>
      </Wrapper>
    </div>
  );
}

const ConversionInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const ConversionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CZKLabel = styled.label`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 0 5px transparent;
  background-color: #1c1c1e;
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 0.9em;
  height: 20px;
  outline: none;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  width: 40px;
`;

const CZKInput = styled.input`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 0 5px transparent;
  background-color: #1c1c1e;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  height: 20px;
  width: 190px;
  font-size: 0.9em;
  border-radius: 0 10px 10px 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
`;

const CurrencySelect = styled.select`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 0 5px transparent;
  background-color: #1c1c1e;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 10px 0 0 10px;
  width: 60px;
  height: 40px;
  padding: 6px;
`;

const ConversionResult = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 0 5px transparent;
  background-color: #1c1c1e;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  width: 190px;
  border-radius: 0 10px 10px 0;
  font-size: 0.9em;
  height: 20px;
`;

const ConverterSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
