import { createContext, useState } from 'react';

import React from 'react';

type RateContextProps = {
  // TODO: create enum for currency codes
  rateCurrency: string;
  setRateCurrency: (currencyCode: string) => void;
};

const RateContext = createContext<RateContextProps>({ rateCurrency: 'EUR', setRateCurrency: () => {} });
//TODO: refer value form enum

const RateProvider = ({ children }: { children: React.ReactNode }) => {
  const [rateCurrency, setRateCurrency] = useState('EUR');

  const value = {
    rateCurrency,
    setRateCurrency,
  };

  return <RateContext.Provider value={value}>{children}</RateContext.Provider>;
};

// Rate Consumer
const RateConsumer = RateContext.Consumer;

// useRate Hook
const useRateContext = () => {
  const context = React.useContext(RateContext);
  if (context === undefined) throw new Error('useRate must be used within RateProvider');
  return context;
};

export { RateProvider, RateConsumer, useRateContext };
