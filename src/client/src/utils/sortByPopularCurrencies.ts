import { RateData } from './processCNBData';

const popularCurrencies = ['USD', 'EUR', 'GBP', 'CHF', 'CNY', 'JPY', 'AUD', 'CAD', 'SEK', 'NZD'];

export const sortByPopularCurrencies = (data: RateData[]): RateData[] => {
  return [...data].sort((a, b) => {
    const orderA = popularCurrencies.indexOf(a.currencyCode);
    const orderB = popularCurrencies.indexOf(b.currencyCode);

    // If one currency is popular and the other is not, prioritize the popular one
    if (orderA === -1) return 1;
    if (orderB === -1) return -1;

    return orderA - orderB;
  });
};
