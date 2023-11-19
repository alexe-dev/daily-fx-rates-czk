import { createContext, useState } from 'react';

import React from 'react';
import { useCNBData } from '../hooks';
import { FXRatesData } from '../utils/processCNBData';

type RateContextProps = {
  // TODO: create enum for currency codes
  rateCurrency: string;
  setRateCurrency: (currencyCode: string) => void;
  isDataPending: boolean;
  dataFetchingError: Error | null;
  data: FXRatesData | null;
};

const RateContext = createContext<RateContextProps>({
  rateCurrency: 'EUR',
  setRateCurrency: () => {},
  isDataPending: true,
  dataFetchingError: null,
  data: null,
});

const RateProvider = ({ children }: { children: React.ReactNode }) => {
  const [rateCurrency, setRateCurrency] = useState('EUR');
  const { data, isPending, error } = useCNBData();

  const value = {
    rateCurrency,
    setRateCurrency,
    isDataPending: isPending,
    dataFetchingError: error,
    data,
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
