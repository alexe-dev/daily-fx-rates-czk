import { FC } from 'react';
import styled from 'styled-components';
import { RateItem } from './RateItem';

const RatesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RatesList = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  flex-wrap: wrap;
  font-weight: 500;
  margin-top: 20px;
  justify-content: center;
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

export const RateList: FC<{ fxData: FXRatesData }> = ({ fxData }) => {
  return (
    <RatesWrapper>
      <h2>{fxData.date?.toUpperCase()}</h2>
      <RatesList>
        {fxData.rates?.map((rate) => (
          <RateItem key={rate.countryCode} rateData={rate} />
        ))}
      </RatesList>
    </RatesWrapper>
  );
};
