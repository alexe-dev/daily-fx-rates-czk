import { countryCodes } from './countryCodes';

type CountryName = keyof typeof countryCodes;

export type RateData = {
  countryName: CountryName;
  countryCode: string;
  currency: string;
  unit: string;
  currencyCode: string;
  rate: string;
};

export type FXRatesData = {
  date: string;
  rates: RateData[];
};

// TODO: add test
// TODO: consider moving this logic to server side
export const processCNBData = (data: string): FXRatesData => {
  // https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/
  const dataArray = data?.split('\n').slice(0, -1); // remove last element as it is empty string
  const [dateString, _headers, ...rateRows] = dataArray;
  const date = dateString.split('#')[0].trim();

  // last element is removed as it is empty string
  const rates = rateRows.map((row) => {
    const [countryName, currency, unit, currencyCode, rate] = row.split('|');
    return {
      countryName: countryName as CountryName,
      countryCode: countryCodes[countryName as CountryName],
      currency,
      unit,
      currencyCode,
      rate,
    };
  });
  return { date, rates };
};
