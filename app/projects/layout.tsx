'use client'

import { css } from '@emotion/react'
import { Wrapped } from '../../declarations';
import { lightBorder } from '@/styles';
import { iconBackground } from '@/styles';

export default function Layout({children}: Wrapped) {
  return (
    <div css={{
      ...iconBackground,
      marginTop: '60px',
      padding: '60px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   
    }}>
      <div css={{display: 'flex', flexDirection: 'column', width: 'calc(731px + 4em)', border: lightBorder, boxShadow: '1px 1px 3px lightgray'}}>
        {children}
      </div>
    </div>
  
  );
}