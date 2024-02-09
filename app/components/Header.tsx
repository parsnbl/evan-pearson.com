'use client'

import React from 'react';
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import Link from 'next/link';
import { colors, roboto_condensed } from '@/styles';

import { FlameKindling, Code, Zap, Target } from 'lucide-react';


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
      padding: '0px 10px',
     
    },
    '& a': {
      textDecoration: 'none',
      ':visited': {
        color: colors.black
      },
      ':hover': {
        outline: `1px solid ${colors.pictonBlue}`
      },
      ':active': {
        backgroundColor: colors.black,
        color: colors.white
      }
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
      <Link href='/'><div>
        <FlameKindling />
            <Zap />
            <Code />
            <Target />
      </div>
      </Link>
      <nav>
        <ul css={navCSS}>
        
          <Link href='/about'><li className={roboto_condensed.className}>ABOUT</li></Link>
          <Link href='/projects'><li className={roboto_condensed.className}>WORK</li></Link>
          <Link href={'/assets/EvanPearson_Resume.pdf'}><li className={roboto_condensed.className}>RESUME</li></Link>
          <Link href='/contact'><li className={roboto_condensed.className}>CONTACT</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;