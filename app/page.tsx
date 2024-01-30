'use client'
import React from 'react';
import Link from 'next/link';
import {css, Global} from '@emotion/react';

import Blurb from './about/components/Blurb'
import Band from './components/Band';
import ProjectArray from './projects/components/ProjectsArray';
import SkillsWrapper from './about/components/SkillsWrapper';
import {
  Frontend,
  Backend,
  Cloud, 
  Growth
} from './about/components/Skills';
import CTA from './components/CTA';

export default function Page() {
    return (
      <>
          <main>
            <Blurb />
            <Band>
              <h2>FEATURED PROJECTS</h2>
            </Band>
            <ProjectArray filterCallback={elem => elem.title === 'wave.js'} />
            <Band>
              <h2>SKILLS</h2>
            </Band>
            <SkillsWrapper columnStyles={{gridTemplateRows: 'repeat(2, 1fr)'}} >
              <Frontend />
              <Backend />
              <Cloud />
              <Growth />
            </SkillsWrapper>
            <CTA />
          </main>
      </>
    );
}