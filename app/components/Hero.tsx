'use client';

import React from 'react';
import facepaint from 'facepaint';
import { css } from '@emotion/react';
import { colors } from '@/styles';


const mq = facepaint([
  '@media(min-width: 420x)',
  '@media(min-width: 720px)'
], {overlap: true})


const BigTagList = css(mq({
  display: 'flex',
  flexDirection: ['column','column', 'row'],
  justifyContent: 'flex-start',
  paddingLeft: '0px',
  maxWidth: '650px',
  margin: '2px 0px',
  '& li': {
    marginRight: '.2em',
  },
}));

const BigTagLi = css({
  border: `1px solid ${colors.pictonBlue}`,
  borderRadius: '15px',
  fontSize: '1.75em',
  padding: '3px',
  display: 'inline-block',
  fontFamily: 'Roboto Mono',
  width: 'fit-content'
})


const HeroContainer = css(mq({
  // width: 'calc(100vw + 50px)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  fontSize: ['12px', '1px', '16px']
}))

const BigTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <li css={BigTagLi}>
      {children}
    </li>
  );
};

const Hero = () => {
  return (
    <div
      css={HeroContainer}
    >
      <div
        css={{
          padding: '20px 20px 20px 20px',
          border: `1px solid ${colors.platinum}`,
          display: 'flex',
          flexDirection: 'column',
          height: 'fit-content',
          justifyContent: 'flex-end',
          backgroundColor: colors.white,
          maxWidth: '750px',

          position: 'relative',
          zIndex: 100,
          '& p': { margin: '0px' },
          '& br': { margin: '0px' },
        }}
      >
        <h1 css={{ fontSize: '3.75em' }}>
          Hello, I&apos;m{' '}
          <span
            css={{ color: colors.pompAndPower, fontFamily: 'Roboto Condensed' }}
          >
            Evan Pearson
          </span>
        </h1>

        <p css={{fontSize: '2.125em' }}>
          I&apos;m a <span css={{ }}>software engineer</span> who <span css={{ fontWeight: 'bold' }}>builds for impact</span>.
        </p>
        <p css={{fontSize: '2.125em' }}>
          I bring 10 years of experience in growth marketing for top brands to build apps and sites that&nbsp;
          <span css={{ color: colors.pictonBlue }}>pop</span>.
        </p>
        {/* <ul css={BigTagList}>
          <BigTag>DIGITAL EXPERIENCE</BigTag>
          <BigTag>ANALYTICS</BigTag>
          <BigTag>STRATEGY</BigTag>
        </ul> */}
        <p css={{fontSize: '2.125em' }}>
         
        </p>
      </div>
    </div>
  );
};

export default Hero;
