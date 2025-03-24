'use client'

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react'
import { createStore, type StoreApi, useStore } from 'zustand'

type CountContextType = {
  count: number
}

const CountContext = createContext<StoreApi<CountContextType> | undefined>(
  undefined,
)

type CountContextProviderProperties = {
  initialCount: number
} & PropsWithChildren

export function CountContextProvider({
  children,
  initialCount,
}: CountContextProviderProperties) {
  const store = useMemo(
    () =>
      createStore<CountContextType>(() => ({
        count: initialCount,
      })),
    [initialCount],
  )
  return <CountContext.Provider value={store}>{children}</CountContext.Provider>
}

export function useCountContext(): CountContextType {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCountContext must be used within CountContext.Provider')
  }
  return useStore(context, (state) => state)
}
