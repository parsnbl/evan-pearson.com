'use client'

import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';


import { colors, border, activeBorder, roboto_condensed, roboto_mono } from '@/styles';
import { Github, Globe  } from 'lucide-react';


import Band from '@/components/Band';

const band = {
  //border: '1px solid black',
  '& h2': {
    marginTop: '0px'
  }
};

const iconButton = {
  color: colors.black,
  ':hover': activeBorder,
  ':active': {
    color: colors.pictonBlue
  }
};

css()


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
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer noopener"
          ><Globe css={[border, iconButton, {marginRight: '.5em'}]}/></a>
        );
      }
      if (github) {
        linkArr.push(
          <a
            href={github}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer noopener"
          ><Github css={[border, iconButton, {marginRight: '.5em'}]}/></a>
        );
      }
      if (npm) {
        linkArr.push(
          <a 
            href={npm}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer noopener"
          ><Image src="/assets/npm.svg" alt="npm" height={24} width={24} css={[border, iconButton, {':active': { filter: 'invert(64%) sepia(82%) saturate(522%) hue-rotate(169deg) brightness(90%) contrast(90%)'}}]}/></a>
        );
      }
      return {  descArr, tagsElem, linkArr };
    };

    const { descArr, tagsElem, linkArr } = buildComponent();

    

    return (
              <Band outerCSS={band}>
                <h2 className={roboto_condensed.className}>{title}</h2>
                <div css={css({
                  display: 'flex',
                })}>
                  <Image 
                    src={`/projects/${imageSlug}`}
                    alt={title}
                    height={300}
                    width={300}
                    css={[border, {marginRight: '10px'}]}
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
              </Band>
    );
};

export default Project;