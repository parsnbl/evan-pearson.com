'use client'

import React from 'react';
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

import { colors, border, container } from '@/styles';
import { Wrapped } from '../../declarations';




const flexCenter = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

const style = css({
  fontSize: '2em',
  color: colors.pictonBlue,
  width: '500px',
  height: '600px',
  fontFamily: 'sans-serif'
})


const CenteredModal = ({children}: Wrapped): EmotionJSX.Element => {
    const centeredContainer = css ([flexCenter, container])
    const modal = css([border, style, flexCenter])

    return (
      <div css={centeredContainer} >
        <div css={modal}>
          {children}
        </div>
   
      </div>

    );
};

export default CenteredModal