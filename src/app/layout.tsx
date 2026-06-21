import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Ju",
  description:
    "Personal website of Andrew Ju — Math of Computation at UCLA. Quant finance, machine learning, and full-stack development.",
  openGraph: {
    title: "Andrew Ju",
    description:
      "Math of Computation @ UCLA. Quant finance, machine learning, and full-stack development.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Andrew Ju",
    description:
      "Math of Computation @ UCLA. Quant finance, machine learning, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
