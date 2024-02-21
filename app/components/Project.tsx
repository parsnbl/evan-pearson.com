'use client';

import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import facepaint from 'facepaint';

import { lightBorder } from '@/styles';

import Icon from './Icon';
import { ProjectData } from '../../declarations';


const mq = facepaint([
  '@media(min-width:405px)',
  '@media(min-width:710px)'
])

const projectWrapper = css(mq({
  border: lightBorder,
  padding: '1em',
  maxWidth: '731px',
  '& img': {
    height: ['220px', '300px','300px'],
    width: ['220px', '300px', '300px']
  }
}));

const projectContentWrapper = css(mq({
  display: 'flex',
  flexDirection: ['column','column', 'row'],
  alignItems: ['center', 'center', 'flex-start']
}))

const projectImage = css(mq({ border: lightBorder, marginRight: ['0px','10px'] }))

const projectTextWrapper = css(mq({
  display: 'flex',
  flexDirection: ['column-reverse','column-reverse', 'column'],
  width: ['200px','300px', 'fit-content'],
  '& :nth-child(1)': {
    flexGrow: [0,1],
  },
}))

const Project = ({
  title,
  imageSlug,
  description,
  tags,
  web,
  github,
  npm,
}: ProjectData) => {
  const buildComponent = () => {
    const descArr = [];
    let tagsElem = '';
    const linkArr = [];
    for (const line of description) {
      descArr.push(<p key={crypto.randomUUID()}>{line}</p>);
    }
    for (let i = 0; i < tags.length; i++) {
      tagsElem += tags[i]?.toUpperCase();
      if (i !== tags.length - 1) {
        tagsElem += ', ';
      }
    }

    if (web) {
      linkArr.push(<Icon key={crypto.randomUUID()} href={web} icon="web" />);
    }
    if (github) {
      linkArr.push(
        <Icon key={crypto.randomUUID()} href={github} icon="github" />,
      );
    }
    if (npm) {
      linkArr.push(<Icon key={crypto.randomUUID()} href={npm} icon="npm" />);
    }
    return { descArr, tagsElem, linkArr };
  };

  const { descArr, tagsElem, linkArr } = buildComponent();

  return (
    <div css={projectWrapper}>
      <h2 css={{ margin: 0 , display: 'inline-block'}}>{title}</h2>
      <div
        css={projectContentWrapper}
      >
        <Image
          src={`/projects/${imageSlug}`}
          css={projectImage}
          alt={title}
          height={300}
          width={300}
        />
        <div css={projectTextWrapper}>
          <div css={{ p: { marginTop: 0 } }}>{descArr}</div>
          <p
            css={{ fontSize: '.8em', marginTop: 0, fontFamily: 'Roboto Mono' }}
          >
            {tagsElem}
          </p>
          <div>{linkArr}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
