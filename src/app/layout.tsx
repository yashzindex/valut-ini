import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Epilogue } from "next/font/google";

const epilogEpilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VALUT - Institutional",
  description: "Vault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogEpilogue.className}>{children}</body>
    </html>
  );
}
