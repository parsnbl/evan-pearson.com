'use client'

import React from 'react';

import Project from '@/components/Project';
import projects from '../project.json';


type filterCallback = (element: any, index: number, array: any[]) => boolean;

const ProjectArray = ({filterCallback}: {filterCallback?: filterCallback}) => {
  const projectArr = [];
  const subset = filterCallback? projects.filter(filterCallback): projects;

  for (let i = 0; i < subset.length; i++) {
    const projectElem = subset[i]
    projectArr.push(<Project {...projectElem} key={`projectArr_${i}`}/>);
  }
  return (
    <>
      {projectArr}
    </>
  );
};

export default ProjectArray;