'use client';

import { useState } from 'react';
import { css } from '@emotion/react';

import Band from '@/components/Band';
import ProjectArray from './components/ProjectsArray';
import Project from '@/components/Project';
import Tag from '@/components/Tag';

import projects from './project.json';
import { colors } from '@/styles';

import LinkButton from '@/components/LinkButton';

const Page = () => {
  const [filteredTags, setFilteredTags] = useState<string[]>([])
  const projectArr = [];


  const updateFilteredTags = ({tag, add}: {tag: string, add: boolean}) => {
    if (add) {
      let update = filteredTags.filter(elem => elem !== tag)
      setFilteredTags(update);
    } else {
      setFilteredTags(Array.from(new Set([...filteredTags, tag])));
    }
    console.log('tags updated', filteredTags)
    return;
  }

  const tags = {};
  for (const project of projects) {
    projectArr.push(<Project {...project} />);
    for (let elem of project.tags) {
      if (!(elem in tags)) tags[elem] = 0
      tags[elem] += 1;
    }
  }
  const tagElems: React.ReactNode[] = [];
  Object.keys(tags).forEach(elem => {
    tagElems.push(
      <Tag key={crypto.randomUUID()} tag={elem} count={tags[elem]} clickCallback={updateFilteredTags}/>
    )
  })

  

  
  // const filterCallback = filteredTags.length > 0 ? 
  //   (project) => filteredTags.every(tag => {project.tags.includes(tag)}):
  //   undefined;
  return (
    <>
      <Band outerCSS={{background: colors.white}}>
        <h1>RECENT PROJECTS</h1>
        {Object.keys(tags).map(elem => (
          <Tag key={crypto.randomUUID()} tag={elem} count={tags[elem]} clickCallback={updateFilteredTags}/>
        ))}
      </Band>
      <Band outerCSS={{ width: 'calc(731px + 4em)', background: colors.white }}>
        <ProjectArray tags={filteredTags}/>
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
