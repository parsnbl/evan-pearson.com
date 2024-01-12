'use client'

import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

const border = css({
  border: '1px solid gray',
  borderRadius: '0.375rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',

})

const centeredModal = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%'

})



const style = css({
  display: 'flex',
  color: 'red',
  fontSize: 50
})


export default function Page() {
    const currentCSS = css([border, style, centeredModal])


    return (
      <div css={currentCSS} >
         <p>Hello!</p>
      </div>

    );
}