import type { Metadata } from "next";
import { Geist, Geist_Mono, Albert_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { DataProvider } from "../contexts/dataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistAlbert = Albert_Sans({
  variable: "--font-geist-albert",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonatha e Cristiano",
  openGraph: {
    title: "Jonatha e Cristiano",
    type: "website",
    siteName: "Jonatha e Cristiano",
    locale: "pt_BR",
    images: [
      {
        url: "https://i.ytimg.com/vi/P96OaTDnJyA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBKu0UpwPyGpTSckC2DvaVaYi9umg",
        width: 1200,
        height: 630,
        alt: "Jonatha e Cristiano",
      },
    ],
  },
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${geistAlbert.variable}  antialiased`}
      >
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
