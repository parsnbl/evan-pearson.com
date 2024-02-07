'use client';
import React from 'react';
import Link from 'next/link';
import { css, Global } from '@emotion/react';

import { colors } from './styles';
import Blurb from './about/components/Blurb';
import Band from './components/Band';
import ProjectArray from './projects/components/ProjectsArray';
import SkillsWrapper from './about/components/SkillsWrapper';
import { Frontend, Backend, Cloud, Growth } from './about/components/Skills';
import CTA from './components/CTA';
import IconMat from './components/IconMat';

import { Laugh } from 'lucide-react';

import MinimalWrapper from './components/MinimalWrapper';

import { roboto_mono } from './fonts';

export default function Page() {
  return (
    <>
      <Band
        cssStyles={{
          border: '1px dashed black',
          height: '60vh',
          display: 'flex',
          width: 'calc(100vw - 18px)',
          marginTop: '60px',
          padding: '0px',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}
      >
        <div css={{
               width: 'calc(100vw + 50px)',
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
          <IconMat />
        </div>
      </Band>
      <MinimalWrapper>
        <Band>
          <h2>FEATURED PROJECTS</h2>
        </Band>
        <ProjectArray filterCallback={(elem) => elem.title === 'wave.js'} />
        <Band>
          <h2>SKILLS</h2>
        </Band>
        <SkillsWrapper columnStyles={{ gridTemplateRows: 'repeat(2, 1fr)' }}>
          <Frontend />
          <Backend />
          <Cloud />
          <Growth />
        </SkillsWrapper>
        <CTA />
      </MinimalWrapper>
    </>
  );
}
