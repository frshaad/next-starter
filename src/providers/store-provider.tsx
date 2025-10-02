"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { type AppStore, makeStore } from "@/store";

export default function StoreProvider({ children }: React.PropsWithChildren) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
