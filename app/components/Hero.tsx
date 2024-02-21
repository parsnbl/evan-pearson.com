'use client';

import React from 'react';
import facepaint from 'facepaint';
import { css } from '@emotion/react';
import { colors } from '@/styles';

const mq = facepaint(['@media(min-width: 420x)', '@media(min-width: 720px)'], {
  overlap: true,
});

const HeroContainer = css(
  mq({
    // width: 'calc(100vw + 50px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    fontSize: ['12px', '1px', '16px'],
  }),
);

const Hero = () => {
  return (
    <div css={HeroContainer}>
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

        <p css={{ fontSize: '2.125em' }}>
          I&apos;m a <span css={{}}>software engineer</span> who{' '}
          <span css={{ fontWeight: 'bold' }}>builds for impact</span>.
        </p>
        <p css={{ fontSize: '2.125em' }}>
          I bring 10 years of experience in growth marketing for top brands to
          build apps and sites that&nbsp;
          <span css={{ color: colors.pictonBlue }}>pop</span>.
        </p>
        <p css={{ fontSize: '2.125em' }}></p>
      </div>
    </div>
  );
};

export default Hero;
