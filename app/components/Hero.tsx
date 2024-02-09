'use client'

import React from 'react'

import { colors, roboto_mono } from '@/styles';
import { Dimensions } from '@/hooks/useDimensions';
import IconMat from './IconMat';

interface HeroCustomization {
  iconMatDim?: Dimensions
}

const Hero = ({ iconMatDim }: HeroCustomization) => {
  return (
    <div css={{
      width: 'calc(100vw + 50px)',
      height: 'inherit',
      display: 'flex'
    }}>
    <div
      css={{
        padding: '60px 0px 0px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '750px',
        fontSize: '34px',
        '& p': { margin: '0px' },
        '& br': { margin: '0px' },
      }}
    >
      <h1 css={{ fontSize: '60px' }}>
        Hello, I'm{' '}
        <span css={{ color: colors.pompAndPower }}>Evan Pearson</span>
      </h1>

      <p>
        I'm a Software Engineer who builds for impact. I use a 10+ year
        career in Growth and skills in
      </p>
      <ul
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '0px',
          maxWidth: '650px',
          margin: '2px 0px',
        }}
      >
        <li
          className={roboto_mono.className}
          css={{
            border: `1px solid ${colors.pictonBlue}`,
            borderRadius: '15px',
            fontSize: '28px',
            padding: '3px',
            display: 'inline-block',
          }}
        >
          DIGITAL MARKETING
        </li>
        <li
          className={roboto_mono.className}
          css={{
            border: `1px solid ${colors.pictonBlue}`,
            borderRadius: '15px',
            fontSize: '28px',
            padding: '3px',
            display: 'inline-block',
          }}
        >
          ANALYTICS
        </li>
        <li
          className={roboto_mono.className}
          css={{
            border: `1px solid ${colors.pictonBlue}`,
            borderRadius: '15px',
            fontSize: '28px',
            padding: '3px',
            display: 'inline-block',
          }}
        >
          STRATEGY
        </li>
      </ul>
      <p>
        to build apps and sites that&nbsp;
        <span css={{ color: colors.pictonBlue }}>pop</span>.
      </p>
    </div>
    <IconMat dim={iconMatDim}/>
  </div>
  );
}

export default Hero;