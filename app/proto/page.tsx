'use client';

import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

import Band from '@/components/Band';
import ProjectArray from './components/ProjectsArray';
import Project from '@/components/Project';
import Tag from '@/components/Tag';

import projects from '../projects/project.json';
import { colors } from '@/styles';

import { ProjectData } from '../../declarations';

import LinkButton from '@/components/LinkButton';

const typedProjects: ProjectData[] = projects;

const tagCounts: {[index: string]: number} = {}
const tagActive: {[index: string]: boolean} = {}
typedProjects.forEach(project => {
  for (let tag of project.tags) {
    if (!(tag in tagCounts)) tagCounts[tag] = 0;
    if (!(tag in tagActive)) tagActive[tag] = false;
    tagCounts[tag] += 1;
  }
})

const Page = () => {
  const [filterTags, setFilterTags] = useState<string[]>([])
  const [renderList, setRenderList] = useState<ProjectData[]>(typedProjects)
  const [tagsActive, setActiveTags] = useState(tagActive)
  
  useEffect(()=>{
    if (!filterTags === undefined || !(filterTags.length < 1)) {
      let filtered: ProjectData[] = [];
      typedProjects.forEach((project) => {
        if (filterTags.every(tag => project.tags.includes(tag)) &&
        !filtered.includes(project)) {
          filtered.push(project)
        }
      });
      setRenderList(filtered);
    } else {
      setRenderList(projects)
    }
  }, [filterTags])


  const filterClickHandler = (tag: string) => {
    if (!filterTags.includes(tag)) {
      setFilterTags([...filterTags, tag])
    } else {
      setFilterTags(filterTags.filter(e => e !== tag));
    }
    const update = {...tagsActive}
    update[tag] = !tagsActive[tag];
    setActiveTags(update);
  }


  return (
    <>
      <Band outerCSS={{background: colors.white}}>
        <h1>RECENT PROJECTS</h1>
        {Object.keys(tagCounts).map(elem => (
          <Tag key={crypto.randomUUID()} tag={elem} count={tagCounts[elem]} clickCallback={() => filterClickHandler(elem)} isActive={tagsActive[elem]}/>
        ))}
      </Band>
      <Band outerCSS={{ width: 'calc(731px + 4em)', background: colors.white }}>
        {renderList.map((project) => {
          return (
            <Project key={crypto.randomUUID()} {...project}/>
          );
        })}
      </Band>
      <Band innerCSS={{display: 'flex', justifyContent: 'center'}}>
        <LinkButton
          buttonCSS={{ fontSize: '2em' }}
          href="/contact">
            LET'S TALK!
        </LinkButton>
      </Band>
    </>
  );
};

export default Page;
