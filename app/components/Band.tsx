'use client'

import React from 'react';
import { SerializedStyles, css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { colors, border, container } from '@/styles';

import { StyledWrapped } from '../../declarations';

const band = css({
  //border: '1px solid black',
  height: 'auto',
  padding: '1em 2em 1em 2em'
});

const Band = ({children, cssStyles = null}: StyledWrapped) : EmotionJSX.Element => {
  const currentCSS = cssStyles ? css([band, cssStyles]) : band;

  return (
    <div css={currentCSS}>
      {children}
    </div>
  );
};

export default Band;