'use client'

import { useState, useEffect } from 'react'

import Project from '@/components/Project';
import projects from '../project.json';
import { ProjectData } from '../../../declarations';

const projectsTyped: ProjectData[] = projects;

type filterCallback = (element: any, index: number, array: any[]) => boolean;

const ProjectArray = ({
  titles = [],
  tags = []
}: {titles?: string[], tags?: string[]}) => {
  const [projectArr, setProjectArr ] = useState<ProjectData[]>(projectsTyped);
  const [titlesFilter, setTitlesFilter] = useState(titles)
  const [tagsFilter, setTagsFilter] = useState(tags)
  
  useEffect(()=>{
    const filtered = projectArr.filter(project => {
      const titlesMatch = titles.length > 0 ? titles.includes(project.title) : true;
      const tagsMatch = tags.length > 0 ? tags.every(tag => project.tags.includes(tag)) : true;
      return titlesMatch && tagsMatch
      });
      setProjectArr(filtered);
    }, [titlesFilter, tagsFilter])

    console.log(projectArr)

  return (
    <>
      {projectArr.map(project => (
        <Project 
          key={crypto.randomUUID()}
          {...project}
        />
      ))}
    </>
  );
};

export default ProjectArray;