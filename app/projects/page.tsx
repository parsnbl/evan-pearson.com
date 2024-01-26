'use client'

import React from 'react';
import { css } from '@emotion/react';

import Band from '@/components/Band';
import Project from '@/components/Project';


import projects from './project.json';

import CTA from './components/CTA'

const Page = () => { 

  return (
    <>
    <Band>
      <h1>RECENT PROJECTS</h1>
    </Band>
      <Project {...projects[0]} />
      <Project {...projects[1]} />
      <CTA />
    </>
  );
};

export default Page;