'use client'

import React from 'react';
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

import { colors } from '@/styles';


const navContainer = css({
  display: 'flex',
  position: 'fixed',
  backgroundColor: colors.white,
  padding: '1em 1em',
  borderBottom: `1px ${colors.platinum} solid`,
  top: 0,
  left: 0,
  right: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 999,
  '& h1': {
    margin: '0px'
  }

})
const navCSS = css({
    display: 'inline-flex',
    listStyle: 'none',
    margin: '0px',
    '& li': {
      padding: '0px 10px'
    }
  });

const Header = (): EmotionJSX.Element => {
  return (
    <header css={navContainer}>
      <div>
        <h1>Evan Pearson</h1>
      </div>
      <nav>
        <ul css={navCSS}>
          <li>About</li>
          <li>Work</li>
          <li>Blog</li>
          <li>Sandbox</li>
          <li>Menu</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;