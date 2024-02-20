'use client';


import { Wrapped } from '../../declarations';
import { iconBackground } from '@/styles';

export default function Layout({ children }: Wrapped) {
  return (
    <div
      css={{
        ...iconBackground,
        marginTop: '60px',
        padding: '60px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: 'calc(731px + 4em)',

        }}
      >
        {children}
      </div>
    </div>
  );
}
