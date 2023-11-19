import { useQuery } from '@tanstack/react-query';

import { processCNBData } from '../utils/processCNBData';
import { useMemo } from 'react';

const API_URL = `${process.env.REACT_APP_PROXY_SERVER_URL || 'http://localhost:9000'}/api`;

export const useCNBData = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['fxRates'],
    queryFn: async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Data fetching failed');
      }
      return response.text();
    },
  });

  const processedData = useMemo(() => (data ? processCNBData(data) : null), [data]);

  return { data: processedData, isPending, error };
};
