'use client';

import React from 'react';
import { css } from '@emotion/react';

import Band from '@/components/Band';
import ProjectArray from './components/ProjectsArray';
import Project from '@/components/Project';

import projects from './project.json';

import CTA from '@/components/Button';

const Page = () => {
  const projectArr = [];
  for (const project of projects) {
    projectArr.push(<Project {...project} />);
  }

  return (
    <>
      <Band>
        <h1>RECENT PROJECTS</h1>
      </Band>
      <ProjectArray />
      <CTA />
    </>
  );
};

export default Page;
