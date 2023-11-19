import { FC } from 'react';
import {
  ConverterSection,
  ConversionInner,
  ConversionInputWrapper,
  ConversionResultInput,
  CZKInput,
  CZKLabel,
  Title,
  CurrencySelect,
} from './styled';
import { RateData } from '../../utils/processCNBData';
import { useConverter } from '../../hooks';

type ConverterProps = {
  rates: RateData[];
};

export const Converter: FC<ConverterProps> = ({ rates }) => {
  const { currencyAmount, CZKAmount, handleAmountChange, selectedCurrency, handleCurrencyChange } = useConverter(rates);

  return (
    <ConverterSection>
      <Title>Convert CZK</Title>
      <ConversionInner>
        <ConversionInputWrapper>
          <CZKLabel htmlFor="czk">CZK</CZKLabel>
          <CZKInput
            // type="number" is problematic, for example if user adds . symbol without any number after it - value will be NaN
            // there are many articles on why text is better option, here is one of them:
            // https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
            // in general, text is better option for input type, because it gives more control
            type="text"
            // inputMode="decimal" is to show decimal keyboard on mobile devices
            inputMode="decimal"
            pattern="[0-9]*"
            id="czk"
            value={CZKAmount ?? ''}
            onChange={handleAmountChange(true)}
          />
        </ConversionInputWrapper>
        <ConversionInputWrapper>
          <CurrencySelect onChange={handleCurrencyChange} value={selectedCurrency}>
            {rates?.map((rate) => {
              return (
                <option key={rate.currencyCode} value={rate.currencyCode}>
                  {rate.currencyCode}
                </option>
              );
            })}
          </CurrencySelect>
          <ConversionResultInput
            type="text"
            inputMode="decimal"
            id="currency"
            value={currencyAmount ?? ''}
            onChange={handleAmountChange(false)}
          />
        </ConversionInputWrapper>
      </ConversionInner>
    </ConverterSection>
  );
};
