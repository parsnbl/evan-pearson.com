'use client'

import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';


import { colors, lightBorder, roboto_mono } from '@/styles';
import { Github, Globe  } from 'lucide-react';


import Band from '@/components/Band';


const projectWrapper = css({
  border: lightBorder,
  padding: '1em',
  width: '731px',
  minWidth: '731px'
})


interface ProjectData {
  title: string,
  imageSlug: string,
  description: string[],
  tags: string[],
  web?: string,
  github?: string,
  npm?: string,
}


const Project = ({
  title, imageSlug, description, tags, web, github, npm
}: ProjectData) => {
    
    const buildComponent = () => {
      const descArr = [];
      let tagsElem = ''
      const linkArr = [];
      for (const line of description) {
        descArr.push(<p key={crypto.randomUUID()}>{line}</p>);
      }
      for (let i = 0; i < tags.length; i++) {
        tagsElem += tags[i].toUpperCase();
        if (i !== tags.length - 1) {
          tagsElem +=', '
        }
      }
      
      if (web) {
        linkArr.push(
          <a 
            href={web}
            css={{
              width: '24px',
              height: '24px',
              display: 'inline-block'
            }}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer noopener"
          ><Globe css={{marginRight: '.5em'}}/></a>
        );
      }
      if (github) {
        linkArr.push(
          <a
            href={github}
            css={{
              width: '24px',
              height: '24px',
              display: 'inline-block'
            }}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer noopener"
          ><Github css={{marginRight: '.5em'}}/></a>
        );
      }
      if (npm) {
        linkArr.push(
          <a 
            href={npm}
            css={{
              width: '24px',
              height: '24px',
              display: 'inline-block'
            }}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer noopener"
          ><Image src="/assets/npm.svg" alt="npm" height={24} width={24} css={{':active': { filter: 'invert(64%) sepia(82%) saturate(522%) hue-rotate(169deg) brightness(90%) contrast(90%)'}}}/></a>
        );
      }
      return {  descArr, tagsElem, linkArr };
    };

    const { descArr, tagsElem, linkArr } = buildComponent();

    

    return (
              <div css={projectWrapper}>
                <h2 css={{marginTop: 0, padding: 0}}>{title}</h2>
                <div css={css({
                  display: 'flex',
                })}>
                  <Image 
                    src={`/projects/${imageSlug}`}
                    css={{border: lightBorder, marginRight: '10px'}}
                    alt={title}
                    height={300}
                    width={300}
                  />
                  <div 
                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      '& :nth-child(1)': {
                        flexGrow: 1
                      }
                  }}>
                    <div>
                      {descArr}
                    </div>
                    <p 
                      className={roboto_mono.className}
                      css={{fontSize: '.8em'}}
                    >{tagsElem}</p>
                    <div>
                     {linkArr}
                    </div>
                  </div>
                </div>
              </div>
    );
};

export default Project;