'use client';

import { useState, useEffect } from 'react';
import Project from '@/components/Project';
import { ProjectData } from '../../../declarations';

const ProjectArray = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [error, setError] = useState(null);
  //fetch projects
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data: ProjectData[]) => {
        setProjects(data);
        setProjectsLoading(false);
        const tagCounts: { [index: string]: number } = {};
        const tagActive: { [index: string]: boolean } = {};
        data.forEach((project) => {
          for (const tag of project.tags) {
            if (!(tag in tagCounts)) tagCounts[tag] = 0;
            if (!(tag in tagActive)) tagActive[tag] = false;
            tagCounts[tag] += 1;
          }
        });
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) throw error;
  return (
    <>
      {!projectsLoading
        ? projects.map((project) => (
            <Project key={crypto.randomUUID()} {...project} />
          ))
        : null}
    </>
  );
};

export default ProjectArray;
