'use client'

import React from 'react';
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import Link from 'next/link';
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

{/* 
<li>Blog</li>
<li>Sandbox</li>
<li>Menu</li> 
*/}

const Header = (): EmotionJSX.Element => {
  return (
    <header css={navContainer}>
      <div>
        <h1>Evan Pearson</h1>
      </div>
      <nav>
        <ul css={navCSS}>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/projects'><li>Work</li></Link>
          <Link href={'/assets/EvanPearson_Resume.pdf'}><li>Resume</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;