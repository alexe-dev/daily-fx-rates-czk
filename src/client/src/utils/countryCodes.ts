export enum CountryCodeEnum {
  Australia = 'AU',
  Brazil = 'BR',
  Bulgaria = 'BG',
  Canada = 'CA',
  China = 'CN',
  Denmark = 'DK',
  EMU = 'EU',
  Hongkong = 'HK',
  Hungary = 'HU',
  Iceland = 'IS',
  IMF = 'IMF',
  India = 'IN',
  Indonesia = 'ID',
  Israel = 'IL',
  Japan = 'JP',
  Malaysia = 'MY',
  Mexico = 'MX',
  'New Zealand' = 'NZ',
  Norway = 'NO',
  Philippines = 'PH',
  Poland = 'PL',
  Romania = 'RO',
  Singapore = 'SG',
  'South Africa' = 'ZA',
  'South Korea' = 'KR',
  Sweden = 'SE',
  Switzerland = 'CH',
  Thailand = 'TH',
  Turkey = 'TR',
  'United Kingdom' = 'GB',
  USA = 'US',
}

export type CountryName = keyof typeof CountryCodeEnum;

export type CountryCode = `${CountryCodeEnum}`;
