/* @jsxImportSource react */

import React from 'react';

import EmotionRootStyleRegistry from './ThemeRegistry';
import GlobalStyles from './components/GlobalStyles';

import type { Metadata } from 'next';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import Header from '@/components/Header';


export const metadata: Metadata = {
  title: 'Evan Pearson',
  description: 'Evan Pearson is a full-stack software engineer who builds cool things for everyone.',
  creator: 'Evan Pearson',
  openGraph: {
    title: 'Evan Pearson',
    siteName: 'Evan Pearson',
    description:'Evan Pearson is a full-stack software engineer who builds cool things for everyone.',
    url: 'https://evan-pearson.com',
    locale: 'en_US',
    type: 'website',

  }
}


export default function RootLayout({ children }: { children: JSX.Element }) {
  const gaId =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_DEV_GA_ID
      : process.env.NEXT_PUBLIC_PROD_GA_ID;

  return (
    <html lang="en">
      <head>
        <GlobalStyles />
        <GoogleAnalytics gaId={gaId as string} />
      </head>
      <body>
        <EmotionRootStyleRegistry>
          <Header />
           {children}
        </EmotionRootStyleRegistry> 
        <SpeedInsights />
      </body>
    </html>
  );
}
