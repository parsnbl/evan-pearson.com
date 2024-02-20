'use client';

import { colors, iconBackground, lightBorder } from '@/styles';
import { css } from '@emotion/react';
import Band from './components/Band';
import ProjectArray from './work/components/ProjectsArray';
import SkillsWrapper from './components/SkillsWrapper';

import { Skill } from './components/Skills';
import Blurb from './components/Blurb';
import LinkButton from './components/LinkButton';

import Hero from './components/Hero';

const heroBandOuterCSS = css({
  height: '60vh',
  display: 'flex',
  width: 'calc(100vw - 18px)',
  marginTop: '60px',
  padding: '0px',
  overflowY: 'hidden',
  overflowX: 'hidden',
  minHeight: '368px',
  ...iconBackground,
});

const elevatorPitchOuterCSS = css({
  borderTop: `1px solid ${colors.platinum}`,
  borderBottom: `1px solid ${colors.platinum}`,
  boxShadow: `0px -1px 1px lightgray`,
});

const projectsBandInnerCSS = css({
  width: 'inherit',
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
});

const skillsBandOuterCSS = css({
  paddingTop: '20px',
  ...iconBackground,
});

const skillsBandInnerCSS = css({
  paddingTop: 0,
  paddingBottom: 0,
});

export default function Page() {
  return (
    <>
      <Band outerCSS={heroBandOuterCSS}>
        <Hero />
      </Band>
      <Band outerCSS={elevatorPitchOuterCSS}>
        <Blurb />
      </Band>
      <Band innerCSS={projectsBandInnerCSS}>
        <h2 css={{ paddingLeft: '32px', marginTop: 0 }}>FEATURED PROJECTS</h2>
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
          <Skill skill="martech" />
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
        <LinkButton buttonCSS={{ fontSize: '3em' }} href="/contact">
          LET&apos;S TALK!
        </LinkButton>
      </Band>
    </>
  );
}
