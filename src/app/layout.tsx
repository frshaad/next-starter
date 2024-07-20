import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import ThemeProvider from '@/context/theme-provider';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'A next.js template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
