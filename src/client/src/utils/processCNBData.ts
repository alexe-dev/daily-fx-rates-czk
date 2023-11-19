import { countryCodes } from '../countryCodes';

export type RateData = {
  countryName: string;
  countryCode: string;
  currency: string;
  amount: string;
  currencyCode: string;
  rate: string;
};

export type FXRatesData = {
  date: string;
  headers: string[];
  rates: RateData[];
};

// TODO: add test

export const processCNBData = (data: string): FXRatesData => {
  // TODO: refactor not to be so hacky, maybe move to server side
  const dataArray = data?.split('\n');
  const date = dataArray?.[0].split('#')[0];
  const headers = dataArray?.[1].split('|');
  const rows = dataArray?.slice(2, -1).map((row) => row.split('|'));
  // last row is removed as it is empty

  const rates = rows?.map((row) => ({
    countryName: row[0],
    countryCode: countryCodes[row[0] as keyof typeof countryCodes],
    currency: row[1],
    amount: row[2],
    currencyCode: row[3],
    rate: row[4],
  }));
  return { date, headers, rates };
};
