import { processCNBData } from './processCNBData';

describe('processCNBData', () => {
  const testData = `16 Nov 2023 #222
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.613
Brazil|real|1|BRL|4.641
Bulgaria|lev|1|BGN|12.501
Canada|dollar|1|CAD|16.425
China|renminbi|1|CNY|3.110
Denmark|krone|1|DKK|3.278
EMU|euro|1|EUR|24.450
Hongkong|dollar|1|HKD|2.890
Hungary|forint|100|HUF|6.498
Iceland|krona|100|ISK|15.949
IMF|SDR|1|XDR|29.905
India|rupee|100|INR|27.084
Indonesia|rupiah|1000|IDR|1.450
Israel|new shekel|1|ILS|5.974
Japan|yen|100|JPY|14.914
Malaysia|ringgit|1|MYR|4.809
Mexico|peso|1|MXN|1.305
New Zealand|dollar|1|NZD|13.482
Norway|krone|1|NOK|2.077
Philippines|peso|100|PHP|40.472
Poland|zloty|1|PLN|5.593
Romania|leu|1|RON|4.919
Singapore|dollar|1|SGD|16.713
South Africa|rand|1|ZAR|1.231
South Korea|won|100|KRW|1.742
Sweden|krona|1|SEK|2.128
Switzerland|franc|1|CHF|25.341
Thailand|baht|100|THB|63.556
Turkey|lira|1|TRY|0.786
United Kingdom|pound|1|GBP|27.945
USA|dollar|1|USD|22.547
`;

  it('should parse the CNB data correctly', () => {
    const result = processCNBData(testData);

    expect(result.date).toBe('16 Nov 2023');
    expect(result.rates).toHaveLength(31);

    expect(result.rates[0]).toEqual({
      countryName: 'USA',
      countryCode: 'US',
      currency: 'dollar',
      unit: '1',
      currencyCode: 'USD',
      rate: '22.547',
    });

    expect(result.rates[result.rates.length - 1]).toEqual({
      countryCode: 'TR',
      countryName: 'Turkey',
      currency: 'lira',
      currencyCode: 'TRY',
      rate: '0.786',
      unit: '1',
    });
  });
});
