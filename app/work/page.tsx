'use client';

import { useState, useEffect } from 'react';

import Band from '@/components/Band';
import Project from '@/components/Project';
import Tag from '@/components/Tag';

import { css } from '@emotion/react';
import facepaint from 'facepaint';

import { colors, lightBorder } from '@/styles';
import { ProjectData } from '../../declarations';
import LinkButton from '@/components/LinkButton';
import Loading from './loading';

type TagCountsObject = { [index: string]: number };
type TagActivesObject = { [index: string]: boolean };


const TagWrapper = css({
  display: 'flex',
  flexWrap: 'wrap'

})

const Page = () => {
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [renderList, setRenderList] = useState<ProjectData[]>([]);
  const [tagActives, setTagActives] = useState<TagActivesObject>({});
  const [tagCounts, setTagsCounts] = useState<TagCountsObject>({});
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
        setTagsCounts(tagCounts);
        setTagActives(tagActive);
        setRenderList(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  //filter the projects
  useEffect(() => {
    if (!filterTags === undefined || !(filterTags.length < 1)) {
      const filtered: ProjectData[] = [];
      projects.forEach((project) => {
        if (
          filterTags.every((tag) => project.tags.includes(tag)) &&
          !filtered.includes(project)
        ) {
          filtered.push(project);
        }
      });
      setRenderList(filtered);
    } else {
      setRenderList(projects);
    }
  }, [filterTags, projects]);

  const filterClickHandler = (tag: string) => {
    if (!filterTags.includes(tag)) {
      setFilterTags([...filterTags, tag]);
    } else {
      setFilterTags(filterTags.filter((e) => e !== tag));
    }
    const update = { ...tagActives };
    update[tag] = !tagActives[tag];
    setTagActives(update);
  };
  if (projectsLoading) return <Loading />;
  if (error) throw error;
  return (
    <>
      <Band
        outerCSS={{
          background: colors.white,
          borderTop: lightBorder,
          borderLeft: lightBorder,
          borderRight: lightBorder,
        }}
      >
        <h1 css={{fontSize: '2em', display: 'inline-block'}}>RECENT PROJECTS</h1>
        <div css={TagWrapper}>
          {Object.keys(tagCounts).map((elem) => (
            <Tag
              key={crypto.randomUUID()}
              tag={elem}
              count={tagCounts[elem] as number}
              clickCallback={() => filterClickHandler(elem)}
              isActive={tagActives[elem] as boolean}
            />
          ))}
        </div>
      </Band>
      <Band
        outerCSS={{
          maxWidth: 'calc(731px + 4em)',
          background: colors.white,
          borderLeft: lightBorder,
          borderRight: lightBorder,
          borderBottom: lightBorder,
        }}
      >
        {renderList.map((project) => {
          return <Project key={crypto.randomUUID()} {...project} />;
        })}
      </Band>
      <Band innerCSS={{ display: 'flex', justifyContent: 'center' }}>
        <LinkButton buttonCSS={{ fontSize: '2em' }} href="/contact">
          LET&apos;S TALK!
        </LinkButton>
      </Band>
    </>
  );
};

export default Page;
