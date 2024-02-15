'use client';
import React from 'react';

import { colors, iconBackground, lightBorder } from '@/styles';

import Band from './components/Band';
import ProjectArray from './projects/components/ProjectsArray';
import SkillsWrapper from './about/components/SkillsWrapper';
// import { Frontend, Backend, Cloud, Growth } from './about/components/Skills';
import { Skill } from './about/components/Skills';
import Blurb from './about/components/Blurb'
import Button from './components/Button';

import Hero from './components/Hero';

import { CustomRef, Dimensions } from './hooks/useDimensions';
import useDimensions from './hooks/useDimensions';

const heroBandOuterCSS = {
  height: '60vh',
  display: 'flex',
  width: 'calc(100vw - 18px)',
  marginTop: '60px',
  padding: '0px',
  overflowY: 'hidden',
  overflowX: 'hidden',
  minHeight: '368px',
  ...iconBackground,
};

const elevatorPitchOuterCSS = {
  borderTop: `1px solid ${colors.platinum}`,
  borderBottom: `1px solid ${colors.platinum}`,
  boxShadow: `0px -1px 1px lightgray`,
};

const projectsBandInnerCSS = {
  width: 'inherit',
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
};
const skillsBandOuterCSS = {
  paddingTop: '20px',
  ...iconBackground,
};

const skillsBandInnerCSS = {
  paddingTop: 0,
  paddingBottom: 0,
};
const CTAInnerCSS = {};

export default function Page() {
  const [heroBandRef, heroBandDim]: [
    heroBandRef: CustomRef,
    heroBandDim: Dimensions
  ] = useDimensions();

  return (
    <>
      <Band innerRef={heroBandRef} outerCSS={heroBandOuterCSS}>
        <Hero iconMatDim={heroBandDim} />
      </Band>
      <Band outerCSS={elevatorPitchOuterCSS}>
       <Blurb />

      </Band>
      <Band innerCSS={projectsBandInnerCSS}>
        <h2 css={{ paddingLeft: '32px' , marginTop: 0}}>FEATURED PROJECTS</h2>
        <div
          css={{
            display: 'flex',
            width: '100%',
            backgroundColor: colors.platinum,
            overflowX: 'auto',
            '> *': {
              margin: '5px 10px',
              backgroundColor: colors.white,
              boxShadow: '2px 2px 2px lightgray',
            },
          }}
        >
          <ProjectArray />
        </div>
      </Band>
      <Band outerCSS={skillsBandOuterCSS} innerCSS={skillsBandInnerCSS}>
        <h2
          css={{
            marginTop: 0,
            background: colors.white,
            display: 'inline-block',
            border: lightBorder,
            boxShadow: '1px 1px 1px lightgray',
            padding: '4px',
          }}
        >
          SKILLS
        </h2>
    
        <SkillsWrapper>
          <Skill skill="languages" />
          <Skill skill="frontend" columns={2} />
          <Skill skill="backend" />
          <Skill skill="data" />
          <Skill skill="growth" />
          <Skill skill="cloud" />
          <Skill skill="backend" />
        </SkillsWrapper>
      </Band>
      <Band
        outerCSS={{ ...iconBackground }}
        innerCSS={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '40px',
        }}
      >
        <Button buttonCSS={{ fontSize: '3em' }} text="LET'S TALK!" />
      </Band>
    </>
  );
}
