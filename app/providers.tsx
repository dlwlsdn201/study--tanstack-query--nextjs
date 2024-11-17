'use client';

import {
  QueryClient,
  QueryClientProvider,
  //   HydrationBoundary,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ConfigProviders: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000, // 1분 간격으로 갱신
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* <HydrationBoundary> */}
      {children}

      {/* </HydrationBoundary> */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default ConfigProviders;
