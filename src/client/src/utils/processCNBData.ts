import { countryCodes } from './countryCodes';

type CountryName = keyof typeof countryCodes;

export type RateData = {
  countryName: CountryName;
  countryCode: string;
  currency: string;
  amount: string;
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
  const dataArray = data?.split('\n');
  const [dateString, _, ...rateRows] = dataArray;
  const date = dateString.split('#')[0];
  // last element is removed as it is empty string
  const rows = rateRows.slice(0, rateRows.length - 1).map((row) => row.split('|'));

  const rates = rows?.map((row) => {
    const [countryName, currency, amount, currencyCode, rate] = row;
    return {
      countryName: countryName as CountryName,
      countryCode: countryCodes[countryName as CountryName],
      currency,
      amount,
      currencyCode,
      rate,
    };
  });
  return { date, rates };
};
