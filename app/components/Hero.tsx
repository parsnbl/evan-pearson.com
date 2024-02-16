'use client';

import React from 'react';
import { colors } from '@/styles';


const BigTag = ({children}: {children: React.ReactNode}) => {
  return (
    <li
      css={{
        border: `1px solid ${colors.pictonBlue}`,
        borderRadius: '15px',
        fontSize: '28px',
        padding: '3px',
        display: 'inline-block',
        fontFamily: 'Roboto Mono'
      }}
    >
      {children}
    </li>
  );
}

const Hero = () => {
  return (
    <div
      css={{
        width: 'calc(100vw + 50px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
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
          fontSize: '34px',
          position: 'relative',
          zIndex: 100,
          '& p': { margin: '0px' },
          '& br': { margin: '0px' },
        }}
      >
        <h1 css={{ fontSize: '60px' }}>
          Hello, I&apos;m{' '}
          <span
            css={{ color: colors.pompAndPower, fontFamily: 'Roboto Condensed' }}
          >
            Evan Pearson
          </span>
        </h1>

        <p>
          I&apos;m a Software Engineer who builds for impact. I use a 10+ year
          career in Growth and skills in
        </p>
        <ul
          css={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '0px',
            maxWidth: '650px',
            margin: '2px 0px',
            '& li': {
              marginRight: '.2em'
            }
          }}
        >
          <BigTag>DIGITAL MARKETING</BigTag>
          <BigTag>ANALYTICS</BigTag>
          <BigTag>STRATEGY</BigTag>
        </ul>
        <p>
          to build apps and sites that&nbsp;
          <span css={{ color: colors.pictonBlue }}>pop</span>.
        </p>
      </div>
    </div>
  );
};

export default Hero;
