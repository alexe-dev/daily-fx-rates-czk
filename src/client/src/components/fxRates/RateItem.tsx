import { FC } from 'react';
import Flags from 'country-flag-icons/react/3x2';
import styled from 'styled-components';
import { RateData } from '../../utils/processCNBData';

const RateCard = styled.div`
  display: flex;
  width: 200px;
  @media (max-width: 710px) {
    width: 155px;
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    width: 120px;
    font-size: 0.7rem;
  }
  @media (max-width: 330px) {
    width: 100px;
    font-size: 0.5rem;
  }
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: #1c1c1e;
  color: white;
  border: 1px solid #1c1c1e;
  justify-content: space-between;
`;

const CountryFlag: FC<{ countryCode: string }> = ({ countryCode }) => {
  const Flag = Flags?.[countryCode as keyof typeof Flags];
  return Flag ? <Flag width={30} /> : <span>{countryCode}</span>;
};

export const RateItem: FC<{ rateData: RateData }> = ({ rateData }) => (
  <RateCard>
    <CountryFlag countryCode={rateData.countryCode} />
    <span>
      {rateData.amount} {rateData.currencyCode}
    </span>
    <span>{rateData.rate}</span>
  </RateCard>
);
