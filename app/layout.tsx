import React from 'react';
import EmotionRootStyleRegistry from './ThemeRegistry';

interface Wrapped {
    children: React.ReactNode
}

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