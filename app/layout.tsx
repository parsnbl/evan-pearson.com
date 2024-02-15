'use client'

import React from 'react';
import EmotionRootStyleRegistry from './ThemeRegistry';
import type { Wrapped } from '../declarations';
import GlobalStyles from './components/GlobalStyles';

import Header from '@/components/Header';




export default function RootLayout({ children }: Wrapped) {
    return (
        <html lang="en">
            <head>
                <GlobalStyles />
            </head>
            <body>
                <EmotionRootStyleRegistry>
                    <Header />
                    {children}
                </EmotionRootStyleRegistry>
            </body>
        </html>
    )
}