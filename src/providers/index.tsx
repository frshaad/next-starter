"use client";

import QueryProvider from "./query-provider";
import StoreProvider from "./store-provider";
import ThemeProvider from "./theme-provider";

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <QueryProvider>
        <StoreProvider>{children}</StoreProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
