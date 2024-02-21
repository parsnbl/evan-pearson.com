'use client';

import React from 'react';
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import Link from 'next/link';
import { colors } from '@/styles';

import { FlameKindling, Code, Zap, Target, Home } from 'lucide-react';


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
    margin: '0px',
  },
});
const navCSS = css({
  display: 'inline-flex',
  listStyle: 'none',
  fontSize: '1em',
  margin: '0px',
  '& li': {
    padding: '0px 10px',
    fontFamily: 'Roboto Condensed',
  },
});
const mq = facepaint([
  '@media(min-width:384px)'
])

const headerIcon = css(mq({
  display: 'grid',
  gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)' ]
}))

{
  /* 
<li>Blog</li>
<li>Sandbox</li>
<li>Menu</li> 
*/
}

const Header = () => {
  return (
    <header css={navContainer}>
      <Link href="/">
        <div css={headerIcon}>
          {/* <Home /> */}
          <FlameKindling />
          <Zap />
          <Code />
          <Target />
        </div>
      </Link>
      <nav>
        <ul css={navCSS}>
          <Link href="/work">
            <li>WORK</li>
          </Link>
          <Link href={'/assets/EvanPearson_Resume.pdf'}>
            <li>RESUME</li>
          </Link>
          <Link href="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
