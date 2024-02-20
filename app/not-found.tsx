'use client';

import { colors, lightBorder, iconBackground } from '@/styles';
import LinkButton from './components/LinkButton';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      css={{
        ...iconBackground,
        marginTop: '60px',
        padding: '60px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          border: lightBorder,
          boxShadow: '1px 1px 3px lightgray',
        }}
      >
        <div
          css={{
            background: colors.white,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <h1>
            <SearchX />
            You look lost
          </h1>
          <p>Maybe go home?</p>
          <LinkButton href="/">HOME</LinkButton>
        </div>
      </div>
    </div>
  );
}
