'use client'

import React from 'react';

import Project from '@/components/Project';
import projects from '../project.json';


type filterCallback = (element: any, index: number, array: any[]) => boolean;

const ProjectArray = ({filterCallback}: {filterCallback?: filterCallback}) => {
  const projectArr = [];
  const subset = filterCallback? projects.filter(filterCallback): projects;

  for (const project of subset) {
    projectArr.push(<Project {...project} key={crypto.randomUUID()}/>);
  }
  return (
    <>
      {projectArr}
    </>
  );
};

export default ProjectArray;