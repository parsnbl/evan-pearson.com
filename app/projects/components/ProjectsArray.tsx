'use client';

import Project from '@/components/Project';
import projects from '../project.json';
import { ProjectData } from '../../../declarations';

const projectsTyped: ProjectData[] = projects;



const ProjectArray = () => {
  


  return (
    <>
      {projectsTyped.map((project) => (
        <Project key={crypto.randomUUID()} {...project} />
      ))}
    </>
  );
};

export default ProjectArray;
