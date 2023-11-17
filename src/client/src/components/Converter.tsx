import { FC, useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import { RateData } from '../utils/processCNBData';

type ConverterProps = {
  rates: RateData[];
};

export const Converter: FC<ConverterProps> = ({ rates }) => {
  const [CZKAmount, setCZKAmount] = useState('1000');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const handleAmountChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      if (value !== '' && !Number(value)) {
        return;
      }
      setCZKAmount(value);
    },
    [setCZKAmount]
  );

  const selectedCurrencyRate = useMemo(
    () => rates?.find((rate) => rate.currencyCode === selectedCurrency)?.rate,
    [selectedCurrency, rates]
  );

  return (
    <ConverterSection>
      <h2>CURRENCY CONVERTER</h2>
      <ConversionInner>
        <ConversionInputWrapper>
          <CZKLabel htmlFor="czk">CZK</CZKLabel>
          <CZKInput id="czk" value={CZKAmount} type="text" onChange={handleAmountChange} />
        </ConversionInputWrapper>
        <ConversionInputWrapper>
          <CurrencySelect onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrencyRate}>
            {rates?.map((rate) => {
              return (
                <option key={rate.currencyCode} value={rate.currencyCode}>
                  {rate.currencyCode}
                </option>
              );
            })}
          </CurrencySelect>
          <ConversionResult>
            {selectedCurrencyRate ? parseFloat((Number(CZKAmount) / Number(selectedCurrencyRate)).toFixed(3)) : null}
          </ConversionResult>
        </ConversionInputWrapper>
      </ConversionInner>
    </ConverterSection>
  );
};

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

const baseConversionStyles = css`
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5), 0 0 0 5px transparent;
  background-color: #1c1c1e;
  color: #fff;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1rem;
`;

const CZKLabel = styled.label`
  ${baseConversionStyles}
  border-radius: 10px 0 0 10px;
  height: 20px;
  padding: 10px;
  width: 50px;
`;

const CZKInput = styled.input`
  ${baseConversionStyles} 
  padding: 10px;
  height: 20px;
  width: 220px;
  border-radius: 0 10px 10px 0;
}
`;

const CurrencySelect = styled.select`
  ${baseConversionStyles}
  border-radius: 10px 0 0 10px;
  font-family: 'Nunito Sans', sans-serif;
  width: 70px;
  height: 40px;
  padding: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 7px;
`;

const ConversionResult = styled.div`
  ${baseConversionStyles}
  padding: 10px;
  width: 220px;
  border-radius: 0 10px 10px 0;

  height: 20px;
`;

const ConverterSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  background: rgb(255, 255, 255);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 10px;
  padding: 0 20px 20px;
`;
