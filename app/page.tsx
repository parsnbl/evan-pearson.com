'use client';
import React from 'react';
import Link from 'next/link';
import { css, Global } from '@emotion/react';

import { colors, roboto_mono } from '@/styles';
import Blurb from './about/components/Blurb';
import Band from './components/Band';
import ProjectArray from './projects/components/ProjectsArray';
import SkillsWrapper from './about/components/SkillsWrapper';
import { Frontend, Backend, Cloud, Growth } from './about/components/Skills';
import CTA from './components/CTA';
import IconMat from './components/IconMat';

import Hero from './components/Hero';

import { Laugh } from 'lucide-react';

import { CustomRef, Dimensions } from './hooks/useDimensions';

import MinimalWrapper from './components/MinimalWrapper';

import useDimensions from './hooks/useDimensions';

const heroBandOuterCSS = {
  border: '1px dashed black',
  height: '60vh',
  display: 'flex',
  width: 'calc(100vw - 18px)',
  marginTop: '60px',
  padding: '0px',
  overflowY: 'hidden',
  overflowX: 'hidden',
  minHeight: '368px',
};

export default function Page() {
  const [heroBandRef, heroBandDim]: 
    [heroBandRef: CustomRef, heroBandDim: Dimensions] = useDimensions();



  return (
    <>
      <Band innerRef={heroBandRef} outerCSS={heroBandOuterCSS}>
        <Hero iconMatDim={heroBandDim}/>
      </Band>
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
    </>
  );
}
