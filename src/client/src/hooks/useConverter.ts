import { useCallback, useEffect, useMemo, useState } from 'react';
import { RateData } from '../utils/processCNBData';
import { useRateContext } from '../contexts';

const calculateTotal = (amount: string, rate: string, rateUnit: string, isFromCZK: boolean) => {
  // this could be localized with `new Intl.NumberFormat('cs-CZ').format(result)` but I kept it simple for now

  let result;
  if (isFromCZK) {
    result = ((+amount / +rate) * +rateUnit).toFixed(3); // rounding to only 3 decimals for better readability
  } else {
    result = ((+amount * +rate) / +rateUnit).toFixed(3);
  }
  // parsefloat used here to remove trailing zeros from floating point number
  return parseFloat(result).toString();
};

export const useConverter = (rates: RateData[]) => {
  const { rateCurrency: selectedCurrency, setRateCurrency: setSelectedCurrency } = useRateContext();

  const [CZKAmount, setCZKAmount] = useState('1000');
  const [currencyAmount, setCurrencyAmount] = useState('0');

  const selectedCurrencyInfo = useMemo(
    () => rates?.find((rate) => rate.currencyCode === selectedCurrency),
    [selectedCurrency, rates]
  );

  useEffect(() => {
    // calcualte currency total from default CZK amount on first load and when selected currency changes
    if (selectedCurrencyInfo) {
      const total = calculateTotal(CZKAmount, selectedCurrencyInfo.rate, selectedCurrencyInfo.unit, true);
      setCurrencyAmount(total);
    }
  }, [selectedCurrencyInfo]);

  const handleAmountChange = useCallback(
    (isCZK: boolean) => (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      // quick validation to prevent user from entering non numeric values
      // allows valid numbers (including 0 and numbers starting with 0) and empty string

      // it would require additional work to allow czech localized number input,
      // as well as to parse back to Number type

      // because of that, entering ',' for decimal is allowed but it is replaced with '.' for consistency
      const valueWithDot = value.replace(',', '.');
      if (Number.isNaN(+valueWithDot)) {
        return;
      }

      if (selectedCurrencyInfo) {
        if (isCZK) {
          // there is some repetition here, further refactoring could be done
          setCZKAmount(valueWithDot);
          const total = calculateTotal(valueWithDot, selectedCurrencyInfo.rate, selectedCurrencyInfo.unit, true);
          setCurrencyAmount(total);
        } else {
          setCurrencyAmount(valueWithDot);
          const totalCZK = calculateTotal(valueWithDot, selectedCurrencyInfo.rate, selectedCurrencyInfo.unit, false);
          setCZKAmount(totalCZK);
        }
      }
    },
    [setCZKAmount, setCurrencyAmount, selectedCurrencyInfo]
  );

  const handleCurrencyChange = (e: React.FormEvent<HTMLSelectElement>) => setSelectedCurrency(e.currentTarget.value);

  return {
    CZKAmount,
    selectedCurrency,
    handleAmountChange,
    handleCurrencyChange,
    currencyAmount,
  };
};
