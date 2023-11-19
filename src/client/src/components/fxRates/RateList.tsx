import { FC } from 'react';
import styled from 'styled-components';
import { RateItem } from './RateItem';
import { RateData } from '../../utils/processCNBData';

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

type FXRatesData = {
  date: string;
  rates: RateData[];
};

type Props = {
  fxData: FXRatesData;
};

export const RateList: FC<Props> = ({ fxData }) => (
  <RatesWrapper>
    <h2>CZK rates for {fxData.date}</h2>
    <RatesList>
      {fxData.rates?.map((rate) => (
        <RateItem key={rate.countryCode} rateData={rate} />
      ))}
    </RatesList>
  </RatesWrapper>
);
