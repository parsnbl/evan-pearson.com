'use client';


import { Wrapped } from '../../declarations';
import { lightBorder } from '@/styles';
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
        height: '100%',
      }}
    >
      <div
        css={{
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          border: lightBorder,
          boxShadow: '1px 1px 3px lightgray',
          width: 'calc(500px + 4em)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
