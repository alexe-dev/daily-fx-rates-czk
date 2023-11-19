import { useCallback, useMemo, useState } from 'react';
import { RateData } from '../utils/processCNBData';
import { useRateContext } from '../contexts';

export const useConverter = (rates: RateData[]) => {
  // we could fetch rates here, but as is already fetched in App.tsx, we can pass it as prop to both RateList and Converter
  // TODO: consider moving rates fetching to RateContext

  const { rateCurrency: selectedCurrency, setRateCurrency: setSelectedCurrency } = useRateContext();

  const [CZKAmount, setCZKAmount] = useState('1000');

  const handleAmountChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      // quick validation to prevent user from entering non numeric values
      // allows valid numbers (including 0 and numbers starting with 0) and empty string
      // this is why ',' is not allowed, as having it results in NaN
      // it would require additional work to allow czech localized number input,
      // including parsing to Number from formatted by Intl.NumberFormat
      if (Number.isNaN(+value)) {
        return;
      }

      setCZKAmount(value);
    },
    [setCZKAmount]
  );

  const handleCurrencyChange = (e: React.FormEvent<HTMLSelectElement>) => setSelectedCurrency(e.currentTarget.value);

  const selectedCurrencyInfo = useMemo(
    () => rates?.find((rate) => rate.currencyCode === selectedCurrency),
    [selectedCurrency, rates]
  );

  const result = useMemo(() => {
    if (!selectedCurrencyInfo || !CZKAmount) return null;

    // rounding to only 3 decimals for better UX
    // parsefloat used here to remove trailing zeros from floating point number
    return parseFloat(((+CZKAmount / +selectedCurrencyInfo.rate) * +selectedCurrencyInfo.amount).toFixed(3));
    // could be localized with `new Intl.NumberFormat('cs-CZ').format(result)` but I kept it simple for consistency with input
  }, [CZKAmount, selectedCurrencyInfo]);

  return { result, CZKAmount, selectedCurrency, handleAmountChange, handleCurrencyChange };
};
