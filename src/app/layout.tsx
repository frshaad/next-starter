import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Next.js Starter App",
  description: "A basic starter for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
