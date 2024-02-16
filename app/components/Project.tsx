'use client';

import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

import { lightBorder } from '@/styles';

import Icon from './Icon';
import { ProjectData } from '../../declarations';

const projectWrapper = css({
  border: lightBorder,
  padding: '1em',
  width: '731px',
  minWidth: '731px',
});

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
      <h2 css={{ margin: 0 }}>{title}</h2>
      <div
        css={css({
          display: 'flex',
        })}
      >
        <Image
          src={`/projects/${imageSlug}`}
          css={{ border: lightBorder, marginRight: '10px' }}
          alt={title}
          height={300}
          width={300}
        />
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            '& :nth-child(1)': {
              flexGrow: 1,
            },
          }}
        >
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
