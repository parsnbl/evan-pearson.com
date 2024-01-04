'use client'

import React from 'react';
import EmotionRootStyleRegistry from './ThemeRegistry';
import type { Wrapped } from '../declarations'


export default function RootLayout({ children }: Wrapped) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <EmotionRootStyleRegistry>
                    {children}
                </EmotionRootStyleRegistry>
            </body>
        </html>
    )
}