'use client';
import React from 'react';


import { colors, roboto_mono } from '@/styles';

import Band from './components/Band';
import ProjectArray from './projects/components/ProjectsArray';
import SkillsWrapper from './about/components/SkillsWrapper';
import { Frontend, Backend, Cloud, Growth } from './about/components/Skills';
import CTA from './components/CTA';


import Hero from './components/Hero';



import { CustomRef, Dimensions } from './hooks/useDimensions';
import useDimensions from './hooks/useDimensions';

import laugh from '@public/assets/laugh.svg'
import atom from '@public/assets/atom.svg'
import audiowaveform from '@public/assets/audio-waveform.svg'
import bugoff from '@public/assets/bug-off.svg'
import gauge from '@public/assets/gauge.svg'
import handmetal from '@public/assets/hand-metal.svg'
import mountain from '@public/assets/mountain.svg'
import palmtree from '@public/assets/palmtree.svg'
import rocket from '@public/assets/rocket.svg'
import star from '@public/assets/star.svg'
import sun from '@public/assets/sun.svg'
import tenttree from '@public/assets/tent-tree.svg'
import thumbsup from '@public/assets/thumbs-up.svg'
import wrench from '@public/assets/wrench.svg'

const svgs = [
  laugh,
  atom,
  audiowaveform,
  bugoff,
  gauge,
  handmetal,
  mountain,
  palmtree,
  rocket,
  star,
  sun,
  tenttree,
  thumbsup,
  wrench
]

const randomSVG = svgs[Math.floor(Math.random() * svgs.length)];


const heroBandOuterCSS = {
  height: '60vh',
  display: 'flex',
  width: 'calc(100vw - 18px)',
  marginTop: '60px',
  padding: '0px',
  overflowY: 'hidden',
  overflowX: 'hidden',
  minHeight: '368px',
  backgroundImage: `url(${randomSVG.src})`,
  backgroundRepeat: 'repeat',
  backgroundAttachment: 'fixed'

};

const elevatorPitchOuterCSS = {
  borderTop: `1px solid ${colors.platinum}`,
  borderBottom: `1px solid ${colors.platinum}`,
  boxShadow: `0px -1px 1px lightgray`
}

const projectsBandInnerCSS = {

}

const skillsBandOuterCSS = {

}

export default function Page() {
  const [heroBandRef, heroBandDim]: 
    [heroBandRef: CustomRef, heroBandDim: Dimensions] = useDimensions();

  return (
    <>
      <Band innerRef={heroBandRef} outerCSS={heroBandOuterCSS}>
        <Hero iconMatDim={heroBandDim}/>
      </Band>
      <Band outerCSS={elevatorPitchOuterCSS}>
        I'm a person
      </Band>
      <Band innerCSS={projectsBandInnerCSS}>
        <h2>FEATURED PROJECTS</h2>
        <ProjectArray filterCallback={(elem) => elem.title === 'wave.js'} />
      </Band>
      <Band>
        <h2>SKILLS</h2>
        <SkillsWrapper columnStyles={{ gridTemplateRows: 'repeat(2, 1fr)' }}>
          <Frontend />
          <Backend />
          <Cloud />
          <Growth />
        </SkillsWrapper>
      </Band>
      
      <CTA />
    </>
  );
}
