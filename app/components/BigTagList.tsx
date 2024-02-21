'use client';

import React from 'react';
import facepaint from 'facepaint';
import { css } from '@emotion/react';
import { colors } from '@/styles';

const mq = facepaint(['@media(min-width: 420x)', '@media(min-width: 720px)'], {
  overlap: true,
});

const BigTagUl = css(
  mq({
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'flex-start',
    paddingLeft: '0px',
    maxWidth: '650px',
    margin: '2px 0px',
    '& li': {
      marginRight: '.2em',
    },
  }),
);

const BigTagLi = css({
  border: `1px solid ${colors.pictonBlue}`,
  borderRadius: '15px',
  fontSize: '1.75em',
  padding: '3px',
  display: 'inline-block',
  fontFamily: 'Roboto Mono',
  width: 'fit-content',
});

export const BigTag = ({ children }: { children: React.ReactNode }) => {
  return <li css={BigTagLi}>{children}</li>;
};

export const BigTagList = ({ text }: { text: string[] }) => {
  return (
    <ul css={BigTagUl}>
      {text.map((str) => {
        return <BigTag key={crypto.randomUUID()}>{str}</BigTag>;
      })}
    </ul>
  );
};
