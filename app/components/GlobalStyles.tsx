'use client';


import { Global } from '@emotion/react';
import { colors } from '@/styles';

export default function GlobalStyles() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Roboto Flex',
            src: 'url("/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf") format("truetype-variations")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto Condensed',
            src: 'url("/fonts/RobotoCondensed-VariableFont_wght.ttf") format("truetype-variations")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Roboto Mono',
            src: 'url("/fonts/RobotoMono-VariableFont_wght.ttf") format("truetype-variations")',
          },
        },
        {
          '*': {
            fontFamily: 'Roboto Flex',
            boxSizing: 'border-box',
          },
          'html, body': {
            width: '100%',
            height: '100%',
            minHeight: '100%',
            padding: 0,
            margin: 0,
          },
          'h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Roboto Condensed',
          },
          a: {
            fontFamily: 'Roboto Condensed',
            textDecoration: 'none',
            color: colors.black,
            ':visited': {
              color: colors.black,
            },
            ':hover': {
              outline: `1px solid ${colors.pictonBlue}`,
            },
            ':active': {
              backgroundColor: colors.black,
              color: colors.white,
            },
          },
        },
      ]}
    />
  );
}
