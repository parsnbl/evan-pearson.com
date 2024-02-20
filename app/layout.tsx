'use client';

import React from 'react';

import EmotionRootStyleRegistry from './ThemeRegistry';
import type { Wrapped } from '../declarations';
import GlobalStyles from './components/GlobalStyles';
// import useGtag from './hooks/useGtag';
import { WebVitals } from './hooks/WebVitals';
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from '@/components/Header';

export default function RootLayout({ children }: Wrapped) {


  const gaId = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_GA_ID : process.env.NEXT_PUBLIC_PROD_GA_ID;

  return (
    <html lang="en">
      <head>
        <GlobalStyles />
        <GoogleAnalytics gaId={gaId as string}/>
      </head>
      <body>
        <WebVitals />
        <EmotionRootStyleRegistry>
          <Header />
          {children}
        </EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
