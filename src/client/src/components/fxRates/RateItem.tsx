import { FC } from 'react';
import Flags from 'country-flag-icons/react/3x2';
import styled from 'styled-components';
import { RateData } from '../../utils/processCNBData';

import { useRateContext } from '../../contexts';

const RateCard = styled.div<{ $isSelected: boolean }>`
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

  background-color: #1c1c1e;
  color: white;
  border-radius: 10px;
  justify-content: space-between;
  cursor: pointer;
  ${(props) =>
    props.$isSelected &&
    `background: linear-gradient(92deg, color(display-p3 0.749 0.511 0.594) 7.56%, rgb(120, 67, 118) 26.05%, rgb(99, 56, 148) 39.5%)`};
`;

const CountryFlag: FC<{ countryCode: string }> = ({ countryCode }) => {
  // Flags is a map of country codes to flag components
  // e.g. Flags['CZ'] is the flag of the Czech Republic
  // and countyCode is already mapped to Flags keys - this is why the type casting is done here
  const Flag = Flags?.[countryCode as keyof typeof Flags];
  return Flag ? <Flag width={30} /> : <span>{countryCode}</span>;
};

type Props = {
  rateData: RateData;
};

export const RateItem: FC<Props> = ({ rateData }) => {
  const { setRateCurrency, rateCurrency } = useRateContext();

  const handleClick = () => setRateCurrency(rateData.currencyCode);

  return (
    <RateCard onClick={handleClick} $isSelected={rateData.currencyCode === rateCurrency}>
      <CountryFlag countryCode={rateData.countryCode} />
      <span>
        {rateData.unit} {rateData.currencyCode}
      </span>
      <span>{rateData.rate}</span>
    </RateCard>
  );
};
