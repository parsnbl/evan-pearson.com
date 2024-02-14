'use client'

import React from 'react';
import EmotionRootStyleRegistry from './ThemeRegistry';
import type { Wrapped } from '../declarations';
import { css } from '@emotion/react';




import { roboto_flex } from './styles';

import Header from '@/components/Header';

const fullSize = css({
    width: '100%',
    height: '100%',
    marginLeft: '0px',
    marginRight: '0px'
})

const htmlCSS = css({
    fontFamily: roboto_flex.variable
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