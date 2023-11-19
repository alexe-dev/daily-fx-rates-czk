import { CountryCode, CountryName, CountryCodeEnum } from './countryCodes';
import { sortByPopularCurrencies } from './sortByPopularCurrencies';

export type RateData = {
  countryName: CountryName;
  countryCode: CountryCode;
  currency: string;
  unit: string;
  currencyCode: string;
  rate: string;
};

export type FXRatesData = {
  date: string;
  rates: RateData[];
};

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
      countryName: getValidCountryName(countryName),
      countryCode: getCountryCode(countryName),
      currency,
      unit,
      currencyCode,
      rate,
    };
  });

  return { date, rates: sortByPopularCurrencies(rates) };
};

export function getCountryCode(countryName: string): CountryCode {
  const countryCode = CountryCodeEnum[countryName as CountryName];
  if (countryCode) {
    return countryCode as CountryCode;
  } else {
    throw new Error(`Country code for country ${countryName} is not found, please add it to CountryCodeEnum`);
  }
}

export function getValidCountryName(countryName: string): CountryName {
  if (Object.keys(CountryCodeEnum).includes(countryName as CountryName)) {
    return countryName as CountryName;
  } else {
    throw new Error(`Country ${countryName} is not found, please add it to CountryCodeEnum`);
  }
}
