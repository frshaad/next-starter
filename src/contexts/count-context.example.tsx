'use client';

import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react';
import { type StoreApi, createStore, useStore } from 'zustand';

type CountContextType = {
  count: number;
};

const CountContext = createContext<StoreApi<CountContextType> | undefined>(
  undefined,
);

type CountContextProviderProperties = PropsWithChildren & {
  initialCount: number;
};

export function CountContextProvider({
  initialCount,
  children,
}: CountContextProviderProperties) {
  const store = useMemo(
    () =>
      createStore<CountContextType>(() => ({
        count: initialCount,
      })),
    [initialCount],
  );
  return (
    <CountContext.Provider value={store}>{children}</CountContext.Provider>
  );
}

export function useCountContext(): CountContextType {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(
      'useCountContext must be used within CountContext.Provider',
    );
  }
  return useStore(context, (state) => state);
}
