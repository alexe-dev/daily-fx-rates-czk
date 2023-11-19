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
  ${(props) => props.$isSelected && `background: linear-gradient(92deg, rgba(152, 47, 47, 1), rgb(69 42 101) 33.61%)`};
`;

const CountryFlag: FC<{ countryCode: string }> = ({ countryCode }) => {
  const Flag = Flags?.[countryCode as keyof typeof Flags];
  return Flag ? <Flag width={30} /> : <span>{countryCode}</span>;
};

type Props = {
  rateData: RateData;
};

export const RateItem: FC<Props> = ({ rateData }) => {
  const { setRateCurrency, rateCurrency } = useRateContext();

  const handleClick = () => setRateCurrency(rateData.currencyCode);
  console.log(`${rateData.countryName}: '${rateData.countryCode}'`);
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
