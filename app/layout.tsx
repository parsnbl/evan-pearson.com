'use client'

import React from 'react';
import EmotionRootStyleRegistry from './ThemeRegistry';
import type { Wrapped } from '../declarations';
import { css } from '@emotion/react';


import { roboto_flex } from './fonts';

import Header from '@/components/Header';

const fullSize = css({
    width: '100%',
    height: '100%',
})



export default function RootLayout({ children }: Wrapped) {
    return (
        <html lang="en" css={fullSize}>
            <head></head>
            <body css={fullSize} className={roboto_flex.className}>
                <EmotionRootStyleRegistry>
                    <Header />
                    {children}
                </EmotionRootStyleRegistry>
            </body>
        </html>
    )
}